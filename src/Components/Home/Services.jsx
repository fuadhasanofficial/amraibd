import { Icon } from "@iconify/react";
import React from "react";

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="text-center mb-4">
        <Icon
          icon={icon}
          width="50"
          height="50"
          className="mx-auto text-blue-500"
        />
      </div>
      <h3 className="text-xl font-semibold text-green-800 text-center mb-2">
        {title}
      </h3>
      <p className="text-black-600 text-center">{description}</p>
    </div>
  );
};

const ServiceCards = () => {
  const services = [
    {
      title: "Web Design",
      description:
        "Creating stunning, responsive websites tailored to your needs.",
      icon: "openmoji:help-others",
    },
    {
      title: "SEO Optimization",
      description: "Boost your online visibility with expert SEO services.",
      icon: "openmoji:help-others",
    },
    {
      title: "বৃক্ষরোপন",
      description: `
আমাদের সংগঠন  বিভিন্ন সেবার পাশাপাশি পরিবেশ সংরক্ষণের লক্ষ্যে বৃক্ষরোপণ কার্যক্রমও পরিচালনা করে থাকে। আমরা বিশ্বাস করি, বৃক্ষরোপণ শুধু পরিবেশ রক্ষাই নয়, ভবিষ্যৎ প্রজন্মের জন্য একটি সবুজ ও টেকসই পৃথিবী গড়ে তুলতেও সহায়ক। প্রতি বছর নিয়মিতভাবে বিভিন্ন স্থানে বৃক্ষরোপণ ও পরিচর্যার উদ্যোগ নিয়ে আমরা এই মহৎ কার্যক্রমকে সামনে এগিয়ে নিয়ে যাচ্ছি।`,
      icon: "healthicons:plantation-worker-alt",
    },
  ];

  return (
    <div className=".solaiman container mx-auto py-12 grid gap-8 grid-cols-1 md:grid-cols-3">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          icon={service.icon}
        />
      ))}
    </div>
  );
};

export default ServiceCards;
