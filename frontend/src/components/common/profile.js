import React from "react";

const Profile = ({ collectedData }) => {
    if (!collectedData) {
        return null; // Handle case when collectedData is not available yet
    }

    const { profilePicture, walletAddress } = collectedData;

    const shortenedWalletAddress = walletAddress ? walletAddress.substring(0, 5) : '';

    return (
        <div className="flex gap-3 items-center justify-center">
            <p className="border border-[#C9C9C9] rounded-[16px] px-[1rem] py-[.5rem] ">{shortenedWalletAddress}...</p>
            <img src={profilePicture} alt="Profile Picture" className="rounded-full h-[40px] w-[40px]" />
        </div>
    );
}

export default Profile;