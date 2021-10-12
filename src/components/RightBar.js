import React from "react";
import ProfilePrewiew from "./ProfilePrew";

export default function RightBar() {
    return (
        <div className="right-bar">
            <div className="rb-content">
                <ProfilePrewiew />
                <ProfilePrewiew />
                <ProfilePrewiew />
                <ProfilePrewiew />
                <ProfilePrewiew />
                {/* <iframe className="spotify" src="https://open.spotify.com/embed/playlist/1fctCx0GUen1nmrV866YFG?theme=0" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe> */}
            </div>
        </div>
    )
}