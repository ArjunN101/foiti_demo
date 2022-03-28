import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import PostPlaceHeader from "../components/Header/PostPlaceHeader";
import SwitchComponent from "../components/Notification/SwitchComponent";

const Notification = () => {
  const [pushNotification, setPushNotification] = useState(false);
  const [newPost, setNewPost] = useState(false);
  const [comments, setComments] = useState(false);
  const [likes, setLikes] = useState(false);
  const [newFollowers, setNewFollowers] = useState(false);
  const [emailNotification, setEmailNotification] = useState(true);

  useEffect(() => {
    if (newPost == true || likes == true || newFollowers == true) {
      setPushNotification(true);
    } else if (newPost == false || likes == false || newFollowers == false) {
      setPushNotification(false);
    }
  }, [newPost, likes, newFollowers]);

  const handlePushNotification = () => {
    setPushNotification((previousState) => !previousState);
    setNewPost(!pushNotification);
    setComments(!pushNotification);
    setLikes(!pushNotification);
    setNewFollowers(!pushNotification);
  };
  const handleNewPost = () => {
    setNewPost(!newPost);
  };
  //   const handleComments = () => {
  //     setComments(!comments);
  //   };
  const handleLikes = () => {
    setLikes(!likes);
  };
  const handleNewFollowers = () => {
    setNewFollowers(!newFollowers);
  };
  const handleEmailNotification = () => {
    setEmailNotification(!emailNotification);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <PostPlaceHeader title="Notification" isProfile={false} />
      <View>
        <View>
          <SwitchComponent
            title="Push Notification"
            isBold={true}
            isEnabled={pushNotification}
            setCheck={handlePushNotification}
          />
        </View>
        <View>
          <SwitchComponent
            title="New Post"
            isBold={false}
            isEnabled={newPost}
            setCheck={handleNewPost}
          />
        </View>
        {/* <View>
          <SwitchComponent
            title="Comments"
            isBold={false}
            isEnabled={comments}
            setCheck={handleComments}
          />
        </View> */}
        <View>
          <SwitchComponent
            title="Likes"
            isBold={false}
            isEnabled={likes}
            setCheck={handleLikes}
          />
        </View>
        <View>
          <SwitchComponent
            title="New Followers"
            isBold={false}
            isEnabled={newFollowers}
            setCheck={handleNewFollowers}
          />
        </View>
        <View>
          <SwitchComponent
            title="Email Notification"
            isBold={true}
            isEnabled={emailNotification}
            setCheck={handleEmailNotification}
          />
        </View>
      </View>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({});
