import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import MainLayout from "../layouts/MainLayout";
import {
  FaUserCircle,
  FaEnvelope,
  FaBirthdayCake,
  FaRulerVertical,
  FaBullseye,
  FaEdit,
  FaSave,
  FaTimes,
} from "react-icons/fa";

import {
  getProfile,
  updateProfile,
} from "../services/profileService";

function Profile() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    height_cm: "",
    health_goal: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await getProfile();

      setProfile(response.user);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load profile");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    try {
      const response = await updateProfile(profile);

      toast.success(response.message);

      setIsEditing(false);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to update profile"
      );
    }
  };

  if (loading) {
    return (
      <MainLayout>
        <p className="text-center text-lg">
          Loading profile...
        </p>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-lg">

        <div className="mb-8 flex items-center justify-between">

          <div className="flex items-center gap-4">
            <FaUserCircle className="text-7xl text-blue-600" />

            <div>
              <h1 className="text-3xl font-bold">
                My Profile
              </h1>

              <p className="text-gray-500">
                Manage your profile information
              </p>
            </div>
          </div>

          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
            >
              <FaEdit />
              Edit Profile
            </button>
          ) : (
            <div className="flex gap-3">

              <button
                onClick={() => {
                  setIsEditing(false);
                  fetchProfile();
                }}
                className="flex items-center gap-2 rounded-xl bg-gray-500 px-5 py-3 text-white"
              >
                <FaTimes />
                Cancel
              </button>

              <button
                onClick={handleSave}
                className="flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-white"
              >
                <FaSave />
                Save
              </button>

            </div>
          )}

        </div>

        <div className="grid gap-6 md:grid-cols-2">

          {/* Name */}

          <div>
            <label className="font-semibold">
              Name
            </label>

            <input
              name="name"
              value={profile.name}
              onChange={handleChange}
              disabled={!isEditing}
              className="mt-2 w-full rounded-lg border p-3 disabled:bg-gray-100"
            />
          </div>

          {/* Email */}

          <div>
            <label className="font-semibold">
              Email
            </label>

            <input
              value={profile.email}
              disabled
              className="mt-2 w-full rounded-lg border bg-gray-100 p-3"
            />
          </div>

          {/* Age */}

          <div>
            <label className="font-semibold">
              Age
            </label>

            <input
              type="number"
              name="age"
              value={profile.age}
              onChange={handleChange}
              disabled={!isEditing}
              className="mt-2 w-full rounded-lg border p-3 disabled:bg-gray-100"
            />
          </div>

          {/* Gender */}

          <div>
            <label className="font-semibold">
              Gender
            </label>

            <select
              name="gender"
              value={profile.gender}
              onChange={handleChange}
              disabled={!isEditing}
              className="mt-2 w-full rounded-lg border p-3 disabled:bg-gray-100"
            >
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          {/* Height */}

          <div>
            <label className="font-semibold">
              Height (cm)
            </label>

            <input
              type="number"
              name="height_cm"
              value={profile.height_cm}
              onChange={handleChange}
              disabled={!isEditing}
              className="mt-2 w-full rounded-lg border p-3 disabled:bg-gray-100"
            />
          </div>

          {/* Health Goal */}

          <div>
            <label className="font-semibold">
              Health Goal
            </label>

            <select
              name="health_goal"
              value={profile.health_goal}
              onChange={handleChange}
              disabled={!isEditing}
              className="mt-2 w-full rounded-lg border p-3 disabled:bg-gray-100"
            >
              <option>Weight Loss</option>
              <option>Weight Gain</option>
              <option>Maintain Fitness</option>
              <option>Improve Sleep</option>
            </select>
          </div>

        </div>

      </div>
    </MainLayout>
  );
}

export default Profile;