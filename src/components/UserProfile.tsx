import React, { useEffect } from "react";
import Image from "next/image";
import { useFirebaseUser, useClickOutsideListener } from "@/hooks";
import { FlexBoxContainer, Paragraph, Button } from "@/components";
import { UserCircleIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

export const UserProfile: React.FC = () => {
  const { user, loading, logout } = useFirebaseUser();
  const router = useRouter();
  const { dropdownRef, isOpen, toggleDropdown } = useClickOutsideListener();

  useEffect(() => {
    if (loading) {
      // console.log("loading");
    }
  }, [router.isReady, loading]);

  return (
    <div className="relative " ref={dropdownRef}>
      <FlexBoxContainer className="flex-col">
        <button
          type="button"
          onClick={toggleDropdown}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-500 text-white focus:outline-none"
        >
          {user?.photoURL ? (
            <Image
              src={user?.photoURL}
              width={500}
              height={500}
              alt="profile pic"
            />
          ) : (
            <UserCircleIcon className="w-full h-full text-gray-300" />
          )}
        </button>
      </FlexBoxContainer>
      {isOpen && (
        <FlexBoxContainer className="absolute flex-col right-0 mt-2 w-72 bg-white border border-gray-300 rounded-lg shadow-lg">
          <FlexBoxContainer className="flex-col justify-center text-xl w-full  gap-y-4 ">
            <Paragraph text={user?.displayName} className="text-center pt-8" />
            <Paragraph text={user?.email} className="text-sm text-center" />
            <FlexBoxContainer className="p-4 w-full">
              <Button
                label="Logout"
                active={true}
                variant="primary"
                onClick={logout}
                className="w-full"
              >
                Logout
              </Button>
            </FlexBoxContainer>
          </FlexBoxContainer>
        </FlexBoxContainer>
      )}
    </div>
  );
};
