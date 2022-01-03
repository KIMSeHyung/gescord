import React, { useMemo, useState } from "react";
import styled from "../../styles/themed-components";

import {
  Avatar,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  List,
  ListItem,
  ListItemAvatar,
  TextField,
} from "@material-ui/core";
import { useMutation, useReactiveVar } from "@apollo/client";
import { isCreateChannelOpenVar } from "../../store/create-channel.state";

import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from "@material-ui/icons/Add";
import { currentUserVar } from "../../store/users.state";
import {
  createChannelMutation,
  createChannelMutationVariables,
} from "../../__generated__/createChannelMutation";
import {
  CREATE_CHANNEL_MUTATION,
  JOIN_CHANNEL_BY_CODE_MUTATION,
} from "./gql/create-channel.gql";
import { curTabVar, userChannelsVar } from "../../store/main.state";
import {
  joinChannelByCodeMutation,
  joinChannelByCodeMutationVariables,
} from "../../__generated__/joinChannelByCodeMutation";

const CustomDialog = styled(Dialog)`
  text-align: center;
`;
const CustomTitle = styled.div`
  font-weight: bold;
  font-size: 1.5em;
  padding: 15px;
`;

const CustomCloseIcon = styled(IconButton)`
  position: absolute;
  right: 0;
  top: 0;
`;

const Bottom = styled.div`
  display: flex;
  height: 120px;
  flex-direction: column;
  background-color: #ecf1f7aa;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  font-weight: 600;
`;

const JoinButton = styled.div`
  width: 90%;
  height: 40px;
  margin-top: 15px;
  border-radius: 4px;
  background-color: #676b79;
  color: white;
  font-size: 14px;
  font-weight: 600;
  line-height: 40px;
  cursor: pointer;
  :hover {
    background-color: #545763;
  }
`;

const FirstStep: React.FC<{ stepHandler: (s: string) => void }> = ({
  stepHandler,
}) => {
  const closehandler = () => {
    isCreateChannelOpenVar(false);
  };
  return (
    <>
      <CustomTitle>
        서버 만들기
        <CustomCloseIcon aria-label="close" onClick={closehandler}>
          <CloseIcon />
        </CustomCloseIcon>
      </CustomTitle>
      <DialogContent>
        <DialogContentText>
          서버는 나와 친구들이 함께 어울리는 공간입니다. 내 서버를 만들고 대화를
          시작해보세요.
        </DialogContentText>
      </DialogContent>
      <List style={{ padding: "15px" }}>
        <ListItem
          button
          style={{ border: "1px solid #cecece", borderRadius: "4px" }}
          onClick={() => {
            stepHandler("create");
          }}
        >
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          직접 만들기
        </ListItem>
      </List>
      <Bottom>
        이미 초대장을 받으셨나요?
        <JoinButton
          onClick={() => {
            stepHandler("code");
          }}
        >
          서버 참가하기
        </JoinButton>
      </Bottom>
    </>
  );
};

const CreateStep: React.FC<{ stepHandler: (s: string) => void }> = ({
  stepHandler,
}) => {
  const [name, setName] = useState<string>("");
  const user = useReactiveVar(currentUserVar);
  const userChannels = useReactiveVar(userChannelsVar);
  const closehandler = () => {
    isCreateChannelOpenVar(false);
    stepHandler("first");
  };
  const [createChannel, { loading }] = useMutation<
    createChannelMutation,
    createChannelMutationVariables
  >(CREATE_CHANNEL_MUTATION, {
    onCompleted: (data) => {
      const { ok, message, channel } = data.createChannel;
      if (ok) {
        userChannelsVar([channel!, ...userChannels]);
        curTabVar(channel!.id);
        closehandler();
      } else {
        console.log(message);
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return (
    <>
      <CustomTitle>
        서버 커스터마이징하기
        <CustomCloseIcon aria-label="close" onClick={closehandler}>
          <CloseIcon />
        </CustomCloseIcon>
      </CustomTitle>
      <DialogContent>
        <DialogContentText>
          새로운 서버에 이름과 아이콘을 부여해 개성을 드러내 보세요. 나중에
          언제든 바꿀 수 있어요.
        </DialogContentText>
        <TextField
          autoFocus
          fullWidth
          label="서버이름"
          style={{ marginTop: "10px" }}
          placeholder={`${user?.name} 님의 서버`}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <DialogContentText style={{ fontSize: "12px", marginTop: "5px" }}>
          서버를 만들면 Gescord의 커뮤니티 지침에 동의하게 됩니다.
        </DialogContentText>
      </DialogContent>
      <Bottom
        style={{
          height: "60px",
          flexDirection: "row",
          justifyContent: "space-between",
          color: "black",
          fontSize: "15px",
          padding: "20px",
          fontWeight: "100",
        }}
      >
        <span
          style={{ cursor: "pointer" }}
          onClick={() => {
            stepHandler("first");
          }}
        >
          뒤로가기
        </span>
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            if (name) createChannel({ variables: { name } });
          }}
          disabled={loading}
        >
          만들기
        </Button>
      </Bottom>
    </>
  );
};

const CodeStep: React.FC<{ stepHandler: (s: string) => void }> = ({
  stepHandler,
}) => {
  const [code, setCode] = useState<string>("");
  const userChannels = useReactiveVar(userChannelsVar);
  const closehandler = () => {
    isCreateChannelOpenVar(false);
    stepHandler("first");
  };

  const [joinByCodeMutation, { loading }] = useMutation<
    joinChannelByCodeMutation,
    joinChannelByCodeMutationVariables
  >(JOIN_CHANNEL_BY_CODE_MUTATION, {
    onCompleted: (data) => {
      const { ok, message, channel } = data.joinChannelByCode;
      if (ok) {
        let isContain = false;
        for (let i = 0; i < userChannels.length; i++) {
          if (userChannels[i].id === channel?.id) {
            isContain = true;
            break;
          }
        }
        if (!isContain) {
          userChannelsVar([channel!, ...userChannels]);
        }
        curTabVar(channel?.id);
        closehandler();
      } else {
        alert(message);
        console.log(message);
      }
    },
    onError: (error) => console.log(error),
  });
  return (
    <>
      <CustomTitle>
        서버 참가하기
        <CustomCloseIcon aria-label="close" onClick={closehandler}>
          <CloseIcon />
        </CustomCloseIcon>
        <DialogContent>
          <DialogContentText>
            아래에 초대 코드를 입력하여 서버에 참가하세요
          </DialogContentText>
          <TextField
            autoFocus
            fullWidth
            label="초대 코드"
            style={{ marginTop: "10px" }}
            placeholder={`hTKzmak`}
            onChange={(e) => {
              setCode(e.target.value);
            }}
          />
        </DialogContent>
      </CustomTitle>
      <Bottom
        style={{
          height: "60px",
          flexDirection: "row",
          justifyContent: "space-between",
          color: "black",
          fontSize: "15px",
          padding: "20px",
          fontWeight: "100",
        }}
      >
        <span
          style={{ cursor: "pointer" }}
          onClick={() => {
            stepHandler("first");
          }}
        >
          뒤로가기
        </span>
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            if (code) joinByCodeMutation({ variables: { code } });
          }}
          disabled={loading}
        >
          서버 참가하기
        </Button>
      </Bottom>
    </>
  );
};

type ICreateChannelDialog = {};

const CreateChannelDialog: React.FC<ICreateChannelDialog> = () => {
  const [step, setStep] = useState<string>("first");
  const isOpen = useReactiveVar(isCreateChannelOpenVar);
  const closehandler = () => {
    isCreateChannelOpenVar(false);
    setStep("first");
  };

  const stepHandler = (s: string) => {
    setStep(s);
  };

  const curStep = useMemo(() => {
    if (step === "first") {
      return <FirstStep stepHandler={stepHandler} />;
    } else if (step === "create") {
      return <CreateStep stepHandler={stepHandler} />;
    } else {
      return <CodeStep stepHandler={stepHandler} />;
    }
  }, [step]);
  return (
    <CustomDialog open={isOpen} maxWidth={"xs"} onClose={closehandler}>
      {isOpen && curStep}
    </CustomDialog>
  );
};

export default CreateChannelDialog;
