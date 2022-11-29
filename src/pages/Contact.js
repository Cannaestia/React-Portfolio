import React from "react";

const notificationMethods = [
  { id: "email", title: "Email" },
  { id: "sms", title: "Phone" },
];

function Contact() {
  return (
    <>
      <div className="bg-[url('https://i.imgur.com/DOWkPg3.jpg')] bg-fixed bg-no-repeat bg-cover grow flex pt-12 pb-12">
        <div className="max-w-3xl mx-auto mt-10 sm:mt-0 bg-white">
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form
              action="https://public.herotofu.com/v1/5ca2d330-685f-11ed-bd0a-c1ef0a3c8340"
              method="POST"
            >
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-12 bg-white px-4 py-5 sm:p-6">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl text-center mt-5">
                    <span className="block xl:inline">Contact</span>{" "}
                    <span className="block text-cyan-500 xl:inline">Me</span>
                  </h1>
                  <div className="bg-white px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          <span className="after:content-['*'] after:ml-0.5 after:text-red-500">
                            First name
                          </span>
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder="Enter First Name"
                          required
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="last-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          <span className="after:content-['*'] after:ml-0.5 after:text-red-500">
                            Last name
                          </span>
                        </label>
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder="Enter Last Name"
                          required
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="email-address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          <span className="after:content-['*'] after:ml-0.5 after:text-red-500">
                            Email address
                          </span>
                        </label>
                        <input
                          type="email"
                          name="email-address"
                          id="email-address"
                          autoComplete="email"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm peer"
                          placeholder="Enter a Valid Email"
                          required
                        />
                        <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                          Please provide a valid email address.
                        </p>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="phone-number"
                          className="block text-sm font-medium text-gray-700"
                        >
                          <span className="after:content-['*'] after:ml-0.5 after:text-red-500">
                            Phone Number
                          </span>
                        </label>
                        <div className="relative mt-1 rounded-md shadow-sm">
                          <div className="absolute inset-y-0 left-0 flex items-center">
                            <label htmlFor="country" className="sr-only">
                              Country
                            </label>
                            <select
                              id="country"
                              name="country"
                              autoComplete="country"
                              className="h-full rounded-md border-transparent bg-transparent py-0 pl-3 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            >
                              <option>US</option>
                              <option>CA</option>
                              <option>EU</option>
                            </select>
                          </div>
                          <input
                            type="text"
                            name="phone-number"
                            id="phone-number"
                            className="block w-full rounded-md border-gray-300 pl-16 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="+1 (555) 987-6543"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700"
                        >
                          <span className="after:content-['*'] after:ml-0.5 after:text-red-500">
                          Please select your preferred contact method
                          </span>
                        </label>
                        <select
                          id="Contact Method"
                          name="Contact Method"
                          className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          defaultValue="Email"
                        >
                          <option>Email</option>
                          <option>Phone</option>
                          <option>Either</option>
                        </select>
                      </div>

                      {/* <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label
                          htmlFor="city"
                          className="block text-sm font-medium text-gray-700"
                        >
                          <span className="after:content-['*'] after:ml-0.5 after:text-red-500">
                            City
                          </span>
                        </label>
                        <input
                          type="text"
                          name="city"
                          id="city"
                          autoComplete="address-level2"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder="Enter Current City"
                          required
                        />
                      </div> */}

                      {/* <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label
                          htmlFor="region"
                          className="block text-sm font-medium text-gray-700"
                        >
                          <span className="after:content-['*'] after:ml-0.5 after:text-red-500">
                            State / Province
                          </span>
                        </label>
                        <input
                          type="text"
                          name="region"
                          id="region"
                          autoComplete="address-level1"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder="Enter Current State"
                          required
                        />
                      </div> */}

                      {/* <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label
                          htmlFor="postal-code"
                          className="block text-sm font-medium text-gray-700"
                        >
                          <span className="after:content-['*'] after:ml-0.5 after:text-red-500">
                            ZIP / Postal code
                          </span>
                        </label>
                        <input
                          type="text"
                          name="postal-code"
                          id="postal-code"
                          autoComplete="postal-code"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder="Enter Zipcode"
                          required
                        />
                      </div> */}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium text-gray-700"
                    >
                      <span className="after:content-['*'] after:ml-0.5 after:text-red-500">
                        Message
                      </span>
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="message"
                        name="message"
                        rows={7}
                        className="mt-1 block w-full  rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Enter Message Here"
                        defaultValue={""}
                        required
                      />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      value="send"
                      className="place-content-center rounded-md border border-transparent bg-cyan-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
    
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
