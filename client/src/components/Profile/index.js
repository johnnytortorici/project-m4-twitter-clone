import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import styled from "styled-components";
import moment from "moment";

import { COLORS } from "../../constants";
import { FiMapPin, FiCalendar } from "react-icons/fi";

import FollowButton from "./FollowButton";
import Tweets from "./Tweets";

import Loader from "../Loader";
import Error from "../Error";

const Profile = () => {
  const { profileId } = useParams();

  const [profile, setProfile] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    fetch(`/api/${profileId}/profile`, {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProfile(data.profile);
        setStatus("idle");
      })
      .catch((error) => setStatus("error"));
  }, [profileId]);

  switch (status) {
    case "loading":
      return <Loader />;
    case "error":
      return <Error />;
    default:
      return (
        <>
          <Header>
            <Banner src={profile.bannerSrc} alt={`${profile.handle}-banner`} />
            <Avatar src={profile.avatarSrc} alt={`${profile.displayName}`} />
            <FollowButton isFollowing={profile.isBeingFollowedByYou} />
          </Header>
          <DisplayName>{profile.displayName}</DisplayName>
          <UserInfo>
            <Handle>
              @{profile.handle}{" "}
              {profile.isFollowingYou && <FollowsYou>Follows you</FollowsYou>}
            </Handle>
            <Bio>{profile.bio}</Bio>
            <Info>
              {profile.location && (
                <Stat>
                  <FiMapPin /> {profile.location}
                </Stat>
              )}
              <Stat>
                <FiCalendar /> Joined{" "}
                {moment(profile.joined).format("MMMM YYYY")}
              </Stat>
            </Info>
            <Info>
              <Stat>
                <Num>{profile.numFollowing}</Num> Following
              </Stat>
              <Stat>
                <Num>{profile.numFollowers}</Num> Followers
              </Stat>
            </Info>
          </UserInfo>
          <Tabs>
            <TweetsLink to="#">Tweets</TweetsLink>
            <TabLink to="#">Media</TabLink>
            <TabLink to="#">Likes</TabLink>
          </Tabs>
          <Tweets handle={profileId} />
        </>
      );
  }
};

const Header = styled.div`
  position: relative;
  text-align: right;
`;

const Banner = styled.img`
  height: 250px;
  width: 100%;
  object-fit: cover;
`;

const Avatar = styled.img`
  position: absolute;
  top: 175px;
  left: 15px;
  width: 150px;
  height: 150px;
  object-fit: cover;
  border: 2px solid white;
  border-radius: 50%;
`;

const DisplayName = styled.h1`
  padding-top: 40px;
`;

const UserInfo = styled.div`
  padding: 5px 10px;
`;

const Handle = styled.p`
  padding: 5px 0 15px;
  color: slategrey;
`;

const FollowsYou = styled.span`
  padding: 2px;
  margin-left: 5px;
  color: slategrey;
  background-color: lightgrey;
`;

const Info = styled.p`
  padding: 7px 0;
  color: slategrey;
`;

const Bio = styled(Info)`
  color: #000;
`;

const Stat = styled.span`
  margin-right: 20px;
`;

const Num = styled.span`
  color: #000;
  font-weight: bold;
`;

const Tabs = styled.div`
  display: flex;
  margin: 10px 0 20px;
`;

const TabLink = styled(NavLink)`
  width: ${100 / 3}%;
  color: darkslategrey;
  padding: 20px;
  font-weight: bold;
  font-size: 1.1em;
  text-align: center;
  text-decoration: none;
  border-bottom: 2px solid darkslategrey;
  &:hover {
    color: ${COLORS.primary};
    border-bottom: 2px solid ${COLORS.primary};
  }
`;

const TweetsLink = styled(TabLink)`
  color: ${COLORS.primary};
  border-bottom: 2px solid ${COLORS.primary};
`;

export default Profile;
