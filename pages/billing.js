
export default function Billing() {

  return (
    <div>
      <p className="text-red-950 text-3xl mb-16 font-extrabold">Billing</p>

        <div className="bg-gray-800 rounded-lg shadow-md p-5">
          <p className="text-black mb-2 font-semibold">Plan:</p>
          <p className="text-amber-600 font-extrabold mb-5">Premium</p>

          <p className="text-black mb-2 font-semibold">Billing Information:</p>
          <div className="bg-gray-700 rounded-lg shadow-md p-5">
            <p className="mb-2">Name on Card: Jay Lee</p>
            <p className="mb-2">Card Number: ************1234</p>
            <p className="mb-2">Expiration Date: 12/22</p>
            <p className="mb-2">Security Code: ***</p>
          </div>
        </div>
      
    </div>
  );
}
