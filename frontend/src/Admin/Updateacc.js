import React, { useState } from "react";
import axios from "axios";

import Sidebar from "../Components/Sidebar";
import Adminnav from "../Components/Admin_nav";
import Sidedesign from "../Components/Sidedesign";

import {
  Box,
  HStack,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  Divider,
} from "@chakra-ui/react";

const API_URL = "http://localhost:8080/api/users";

function Updateacc() {
  const [searchType, setSearchType] = useState("email");
  const [searchValue, setSearchValue] = useState("");

  const [userType, setUserType] = useState("STUDENT");
  const [roles, setRoles] = useState(["STUDENT"]);

  const [user, setUser] = useState({});

  const [isUserLoaded, setIsUserLoaded] = useState(false);
  const [loading, setLoading] = useState(false);

  // Determine the user type from the fetched user.
  const determineUserType = (data) => {
    const existingRoles = Array.isArray(data.roles)
      ? data.roles
      : data.role
        ? [data.role]
        : [];

    const normalizedRoles = existingRoles.map((r) =>
      String(r).toUpperCase().replaceAll(" ", "_")
    );

    return normalizedRoles.includes("STUDENT")
      ? "STUDENT"
      : "TEACHER";
  };

  // Retrieve user by email or registration number.
  const handleSearch = async () => {
    if (!searchValue.trim()) {
      alert("Enter an email address or registration number.");
      return;
    }

    setLoading(true);
    setIsUserLoaded(false);

    try {
      const url =
        searchType === "email"
          ? `${API_URL}/email/${encodeURIComponent(searchValue.trim())}`
          : `${API_URL}/regnum/${encodeURIComponent(searchValue.trim())}`;

      const response = await axios.get(url);
      const data = response.data;

      console.log(data);
      setUser(data);

      const type = determineUserType(data);
      setUserType(type);

      const existingRoles = Array.isArray(data.roles)
        ? data.roles
        : data.role
          ? [data.role]
          : [];

      if (type === "STUDENT") {
        setRoles(["STUDENT"]);
      } else {
        const teacherRoles = existingRoles.filter((r) =>
          ["MENTOR", "BATCH_COORDINATOR", "PANEL_MEMBER",
           "Mentor", "Batch Coordinator", "Panel Member"].includes(r)
        );

        setRoles([
          "TEACHER",
          ...teacherRoles.filter(
            (r) => String(r).toLowerCase() !== "TEACHER"
          ),
        ]);
      }

      setIsUserLoaded(true);
    } catch (error) {
      console.error("Fetch user failed:", error);
      setUser({});
      setIsUserLoaded(false);

      alert(
        error.response?.status === 404
          ? "User not found."
          : error.response?.data?.message ||
            "Failed to retrieve user."
      );
    } finally {
      setLoading(false);
    }
  };

  // Update user attributes.
  const handleUpdate = async () => {

    try {
      const payload = {
        ...user,
        roles:
          userType === "STUDENT"
            ? ["STUDENT"]
            : ["TEACHER", ...roles.filter(
                (r) =>
                  !["STUDENT", "TEACHER"].includes(r)
              )],
      };


      console.log(JSON.stringify(payload));
      await axios.put(`${API_URL}`, JSON.stringify(payload),  {
          headers: {
            'Content-Type': 'application/json' 
          }
        });

      alert("User updated successfully.");
    } catch (error) {
      console.error("Update failed:", error);
      alert(
        error.response?.data?.message ||
          "Failed to update user."
      );
    }
  };

  // Delete the selected user.
  const handleDelete = async () => {

    const confirmed = window.confirm(
      "Are you sure you want to permanently delete this user?"
    );

    if (!confirmed) return;

    try {
      //await axios.delete(`${API_URL}/${userId}`);

      alert("User deleted successfully.");

      setUser({});
      setRoles(["STUDENT"]);
      setUserType("STUDENT");
      setSearchValue("");
      setIsUserLoaded(false);
    } catch (error) {
      console.error("Delete failed:", error);
      alert(
        error.response?.data?.message ||
          "Failed to delete user."
      );
    }
  };

  const handleFieldChange = (key, value) => {
    setUser((previous) => ({
      ...previous,
      [key]: value,
    }));
  };

  // Convert primitive values to editable strings.
  const displayValue = (value) => {
    if (value == null) return "";
    if (typeof value === "object") {
      return JSON.stringify(value, null, 2);
    }
    return String(value);
  };

  // Fields handled separately or managed by the server.
  const excludedFields = new Set([
    "password",
    "passwordHash",
    "roles",
    "role",
    "userType",
    "userId",
    "id",
    "_id",
    "__v",
    "createdAt",
    "updatedAt",
  ]);

  return (
    <div>
      <Sidedesign />
      <Adminnav />

      <Box
        pos="fixed"
        left="300px"
        top="30px"
        height="100vh"
        width="calc(100% - 300px)"
        px="40px"
        py="20px"
        bg="#F3FDFB"
        overflowY="auto"
      >
        <Box
          maxW="750px"
          mx="auto"
          p="24px"
          bg="#D8E8E4"
          border="2px solid"
          borderColor="gray.300"
          borderRadius="md"
        >
          <Text fontSize="20px" fontWeight="bold">
            UPDATE ACCOUNT
          </Text>

          <Divider borderColor="black" my={3} />

          {/* Search section */}
          <FormControl isRequired>
            <FormLabel>Search By</FormLabel>
            <Select
              value={searchType}
              onChange={(e) => {
                setSearchType(e.target.value);
                setSearchValue("");
                setIsUserLoaded(false);
                setUser({});
              }}
              bg="white"
            >
              <option value="email">Email Address</option>
              <option value="regnum">Register Number</option>
            </Select>
          </FormControl>

          <FormControl mt={4} isRequired>
            <FormLabel>
              {searchType === "email"
                ? "Email Address"
                : "Register Number"}
            </FormLabel>

            <Input
              bg="white"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder={
                searchType === "email"
                  ? "Enter email address"
                  : "Enter register number"
              }
            />
          </FormControl>

          <Button
            mt={4}
            bg="#080E2C"
            color="white"
            isLoading={loading}
            onClick={handleSearch}
          >
            Search User
          </Button>

          {isUserLoaded && (
            <Stack spacing={4} mt={8}>
              <Divider borderColor="black" />

              <Text fontSize="lg" fontWeight="bold">
                USER DETAILS
              </Text>

              {/* Display all other fetched attributes dynamically. */}
              {Object.entries(user)
                .filter(([key]) => !excludedFields.has(key))
                .map(([key, value]) => (
                  <FormControl key={key}>
                    <FormLabel>
                      {key
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^./, (s) => s.toUpperCase())}
                    </FormLabel>

                    {typeof value === "object" && value !== null ? (
                      <Input
                        value={displayValue(value)}
                        onChange={(e) => {
                          try {
                            handleFieldChange(
                              key,
                              JSON.parse(e.target.value)
                            );
                          } catch {
                            handleFieldChange(key, e.target.value);
                          }
                        }}
                        bg="white"
                      />
                    ) : (
                      <Input
                        value={displayValue(value)}
                        onChange={(e) =>
                          handleFieldChange(key, e.target.value)
                        }
                        bg="white"
                      />
                    )}
                  </FormControl>
                ))}

              {/* Roles */}
              <FormControl>
                <FormLabel>Roles</FormLabel>

                <Menu closeOnSelect={false}>
                  <MenuButton
                    as={Button}
                    width="100%"
                    textAlign="left"
                    fontWeight="normal"
                    variant="outline"
                    bg="white"
                    isDisabled={userType === "STUDENT"}
                  >
                    {roles.join(", ")}
                  </MenuButton>

                  <MenuList>
                    <MenuOptionGroup
                      type="checkbox"
                      value={roles}
                      isDisabled={userType === "STUDENT"}
                      onChange={(values) => {
                        setRoles([
                          "TEACHER",
                          ...values.filter(
                            (r) =>
                              !["STUDENT", "TEACHER"].includes(r)
                          ),
                        ]);
                      }}
                    >
                      <MenuItemOption
                        value="STUDENT"
                        isDisabled
                      >
                        STUDENT
                      </MenuItemOption>

                      <MenuItemOption
                        value="TEACHER"
                        isDisabled
                      >
                        TEACHER
                      </MenuItemOption>

                      <MenuItemOption value="Mentor">
                        MENTOR
                      </MenuItemOption>

                      <MenuItemOption value="Batch Coordinator">
                        BATCH COORDINATOR
                      </MenuItemOption>

                      <MenuItemOption value="Panel Member">
                        PANEL MEMBER
                      </MenuItemOption>
                    </MenuOptionGroup>
                  </MenuList>
                </Menu>
              </FormControl>

              <HStack pt={4} spacing={3}>
                <Button
                  flex={1}
                  bg="#080E2C"
                  color="white"
                  onClick={handleUpdate}
                >
                  SAVE CHANGES
                </Button>

                <Button
                  flex={1}
                  colorScheme="red"
                  onClick={handleDelete}
                >
                  DELETE USER
                </Button>
              </HStack>
            </Stack>
          )}
        </Box>
      </Box>

      <Sidebar />
    </div>
  );
}

export default Updateacc;
