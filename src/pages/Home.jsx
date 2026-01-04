import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-50">

      {/* HERO */}
      <section className="min-h-[80vh] flex items-center px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-extrabold text-indigo-700 leading-tight">
              Discover Events <br /> That Matter
            </h1>
            <p className="text-xl text-gray-600">
              EventSphere connects you to the best concerts, shows, sports,
              and cultural events — all in one place.
            </p>

            <div className="flex gap-6">
              <Link
  to="/events"
  className="px-8 py-4 bg-indigo-700 text-white text-lg font-semibold rounded-xl hover:bg-indigo-800 transition inline-block"
>
  Browse Events
</Link>

<Link
  to="/contact"
  className="px-8 py-4 border border-indigo-700 text-indigo-700 text-lg font-semibold rounded-xl hover:bg-indigo-50 transition inline-block"
>
  Contact Us
</Link>

            </div>

            <div className="flex gap-10 pt-8">
              <div>
                <p className="text-3xl font-bold text-gray-900">250+</p>
                <p className="text-gray-500 text-sm">Events</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">20K+</p>
                <p className="text-gray-500 text-sm">Users</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">6</p>
                <p className="text-gray-500 text-sm">Categories</p>
              </div>
            </div>
          </div>

          <div className="h-[420px] bg-indigo-100 rounded-3xl shadow-inner" />
        </div>
      </section>

      {/* WHY */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-14">
            Why Choose EventSphere?
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "All Events in One Place",
                text: "Discover concerts, sports, and culture without jumping platforms.",
              },
              {
                title: "Fast & Secure Booking",
                text: "Simple checkout and trusted payment process.",
              },
              {
                title: "Verified Organizers",
                text: "Only real events from trusted partners.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 border rounded-2xl p-8 text-center hover:shadow-md transition"
              >
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600 mt-3">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPLORE EVENTS (UPGRADED) */}
     <section className="py-24 bg-gray-50 px-6">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold mb-14 text-center">
      Explore New Events
    </h2>

    <div className="grid md:grid-cols-3 gap-10">
      {[
        {
          title: "Summer Beats Festival",
          location: "Casablanca",
          date: "24 July 2026",
          price: 25,
          tag: "Music",
        },
        {
          title: "Modern Art Expo",
          location: "Rabat",
          date: "02 August 2026",
          price: 15,
          tag: "Art",
        },
        {
          title: "Champions League Night",
          location: "Marrakech",
          date: "18 July 2026",
          price: 40,
          tag: "Football",
        },
        {
          title: "Stand-Up Comedy Show",
          location: "Tangier",
          date: "30 July 2026",
          price: 20,
          tag: "Theatre",
        },
        {
          title: "Electronic Night Party",
          location: "Agadir",
          date: "12 August 2026",
          price: 35,
          tag: "Festival",
        },
        {
          title: "Classical Orchestra Live",
          location: "Fes",
          date: "05 September 2026",
          price: 50,
          tag: "Music",
        },
      ].map((event, index) => (
        <div
          key={index}
          className="bg-white rounded-3xl border shadow-sm overflow-hidden hover:shadow-lg transition"
        >
          {/* IMAGE */}
          <div className="h-56 bg-indigo-100 flex items-center justify-center text-indigo-400 text-xl font-semibold">
            Event Image
          </div>

          {/* CONTENT */}
          <div className="p-6 space-y-3">
            <span className="inline-block px-3 py-1 text-xs bg-indigo-100 text-indigo-700 rounded-full">
              {event.tag}
            </span>

            <h3 className="text-lg font-semibold text-gray-900">
              {event.title}
            </h3>

            <p className="text-sm text-gray-500">
              📍 {event.location} · 🗓 {event.date}
            </p>

            <div className="flex justify-between items-center pt-4">
              <p className="text-indigo-700 font-bold text-lg">
                From ${event.price}
              </p>
               
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* CATEGORIES (UPGRADED) */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-14 text-center">
            Explore by Category
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: "🎵",
                title: "Music Events",
                text: "Concerts, DJ nights, festivals and live performances.",
              },
              {
                icon: "🎭",
                title: "Shows & Theater",
                text: "Plays, comedy shows and cultural performances.",
              },
              {
                icon: "⚽",
                title: "Sports",
                text: "Football matches, tournaments and live competitions.",
              },
              {
                icon: "🎨",
                title: "Art & Culture",
                text: "Exhibitions, galleries and creative experiences.",
              },
              {
                icon: "🎤",
                title: "Festivals",
                text: "Large-scale festivals and unforgettable moments.",
              },
              {
                icon: "🎬",
                title: "Cinema & Media",
                text: "Movie premieres and special screenings.",
              },
            ].map((cat, i) => (
              <div
                key={i}
                className="bg-gray-50 border rounded-3xl p-10 hover:shadow-md transition cursor-pointer"
              >
                <div className="text-5xl mb-4">{cat.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {cat.title}
                </h3>
                <p className="text-gray-600">
                  {cat.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
     <section className="py-28 bg-indigo-700 px-6">
  <div className="max-w-7xl mx-auto">

    {/* TITLE */}
    <div className="text-center mb-20">
      <h2 className="text-4xl font-bold text-white mb-4">
        How EventSphere Works
      </h2>
      <p className="text-indigo-200 text-lg max-w-2xl mx-auto">
        From discovery to experience — everything is designed to be simple,
        fast, and enjoyable.
      </p>
    </div>

    {/* STEPS */}
    <div className="grid md:grid-cols-3 gap-12">
      {[
        {
          step: "01",
          title: "Discover Events",
          text: "Browse hundreds of concerts, shows, sports and cultural events.",
          icon: "🔍",
        },
        {
          step: "02",
          title: "Book Instantly",
          text: "Choose your tickets and book securely in just a few clicks.",
          icon: "🎟️",
        },
        {
          step: "03",
          title: "Enjoy the Experience",
          text: "Show up, enjoy the moment, and create unforgettable memories.",
          icon: "✨",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white/10 backdrop-blur rounded-3xl p-10 text-center border border-white/20 hover:bg-white/15 transition"
        >
          <div className="text-5xl mb-6">{item.icon}</div>

          <p className="text-indigo-200 text-sm mb-2">
            STEP {item.step}
          </p>

          <h3 className="text-xl font-semibold text-white mb-3">
            {item.title}
          </h3>

          <p className="text-indigo-100">
            {item.text}
          </p>
        </div>
      ))}
    </div>

    {/* CTA */}
    <div className="text-center mt-24">
      <p className="text-indigo-200 text-lg mb-6">
        Simple. Secure. Designed for real experiences.
      </p>

      <Link
  to="/events"
  className="px-12 py-4 bg-white text-indigo-700 font-semibold text-lg rounded-xl hover:bg-indigo-100 transition shadow-lg inline-block"
>
  Explore All Events
</Link>

    </div>

  </div>
</section>


    </div>
  );
};

export default Home;
