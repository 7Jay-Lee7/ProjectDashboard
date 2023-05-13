
export default function Settings() {

  return (
    <div>
      <p className="text-red-950 text-3xl mb-16 font-extrabold">Settings</p>

      
        <div>
          <p className="text-red-950 text-xl mb-5 font-extrabold">Account Information</p>
          <div className="bg-gray-800 rounded-lg shadow-md p-5 mb-10">
            <p className="text-black mb-2 font-semibold">Name:</p>
            <p className="text-gray-400 font-semibold mb-5">Jay Lee</p>
            <p className="text-black mb-2 font-semibold">Email:</p>
            <p className="text-gray-400 font-semibold">jaylee777@test.com</p>
          </div>

          <p className="text-red-950 text-xl mb-5 font-extrabold">Notifications</p>
          <div className="bg-gray-800 rounded-lg shadow-md p-5">
            <div className="flex items-center justify-between mb-5">
              <p className="text-black font-semibold">Email Notifications</p>
              <div className="relative inline-block w-10 mr-2 align-middle select-none">
                <input
                  type="checkbox"
                  name="email-notifications"
                  id="email-notifications"
                  className="toggle-checkbox absolute block w-6 h-6 rounded-full border-4 appearance-none cursor-pointer"
                />
                <label
                  htmlFor="email-notifications"
                  className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                ></label>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-black font-semibold">Push Notifications</p>
              <div className="relative inline-block w-10 mr-2 align-middle select-none">
                <input
                  type="checkbox"
                  name="push-notifications"
                  id="push-notifications"
                  className="toggle-checkbox absolute block w-6 h-6 rounded-full border-4 appearance-none cursor-pointer"
                />
                <label
                  htmlFor="push-notifications"
                  className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                ></label>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
