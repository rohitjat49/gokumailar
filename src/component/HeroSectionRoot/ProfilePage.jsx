import React from "react";
import { useUserLogin } from "../../store/auth/hook";

const ranks = Array.from({ length: 35 }, (_, index) => ({
  rank: index + 1,
  emailsToNextRank:
    index === 0
      ? "100 emails to reach Rank 2"
      : `${index * 100 + 100} emails to reach Rank ${index + 2}`,
}));

const RankCard = ({ rank, emailsToNextRank }) => (
  <div className="flex flex-col items-center w-64 p-4 bg-gray-900 rounded-md mx-20">
    <img
      src={"Img/Rank_1 (1).webp"}
      alt={`Rank ${rank}`}
      className="w-12 h-12 mb-2"
    />
    <p className="text-gray-400 text-xs text-center whitespace-nowrap">
      {emailsToNextRank}
    </p>
  </div>
);

const ProfilePage = () => {
  const authStatus = useUserLogin();
  return (
    <div className="bg-gray-800 min-h-screen p-8 text-white">
      <div className="bg-gray-900 p-6 rounded-lg text-center">
        <div className="flex justify-between">
          <div>
            <h1 className="text-4xl font-bold">{authStatus?.username}</h1>
            <p className="text-gray-400">(116-321-927)</p>
          </div>
          <img src="Img/Rank_1 (1).webp" alt="User Icon" width={39} />
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="text-left">
            <p>
              Type: <span className="font-bold">20,000 Daily Credits</span>
            </p>
            <p>
              Credit: <span className="font-bold">20,000</span>
            </p>
          </div>
          <div className="text-right">
            <p>
              Expiration:{" "}
              <span className="font-bold">September 30, 2024 at 4:37 AM</span>
            </p>
            <p>
              Total Sent:{" "}
              <span className="font-bold">{authStatus?.emailsSent}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Ranks</h2>

        <div className="relative">
          <div className="flex overflow-x-auto space-x-64 scrollbar-hide bg-gray-700 p-4 rounded-lg">
            {ranks.map((rank) => (
              <RankCard
                key={rank.rank}
                rank={rank.rank}
                emailsToNextRank={rank.emailsToNextRank}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-4 mt-6">
        <button className="bg-green-700 px-6 py-2 rounded-md">
          MonsterMailer Opium
        </button>
        <button className="bg-green-700 px-6 py-2 rounded-md">
          MonsterMailer API Creator
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
