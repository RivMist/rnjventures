import React from "react";
import logo from "./logo.svg";
import "./ProfileCard.css";

export interface Profile {
  name: string;
  bio: string;
  email: string;
  picUrl: string;
}

interface ProfileCardProps {
  profile: Profile;
}

const ProfileCard = (props: ProfileCardProps) => {
  const { profile } = props;
  return (
    <div className="Profile">
      <img src={profile.picUrl} className="Image" />
    </div>
  );
};

export default ProfileCard;
