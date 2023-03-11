import { useState } from 'react';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [religion, setReligion] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [userId, setUserId] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <div className=" bg-cover bg-center relative mt-[10px]" >
      <div
        className="h-[400px] w-[520px]  opacity-50 bg-center bg-cover absolute top-0 left-0"
        style={{ backgroundImage: 'url(https://i.ibb.co/GdkLwNN/signup-page-pattern01.png)' }}
      />
      <div
        className="h-[200px]  opacity-50 w-[320px] bg-center bg-cover absolute top-0 right-0"
        style={{ backgroundImage: 'url(https://i.ibb.co/t3Tcjwx/signup-page-pattern02.png)' }}
      />
      <div
        className="h-[300px] opacity-50 w-[520px] bg-center bg-cover absolute bottom-0 right-0"
        style={{ backgroundImage: 'url(https://i.ibb.co/s1rs6Ld/signup-page-pattern03.png)' }}
      />
      <div
        className="h-[300px]  opacity-50 w-[520px] z-50 bg-center bg-cover absolute bottom-0 left-0"
        style={{ backgroundImage: 'url(https://i.ibb.co/1KWF98P/signup-page-pattern04.png)' }}
      />
      <div className="gird justify-center items-center p-32 min-h-screen border" >
        <div className='border border-red-500 rounded-[50px]'>
          <h1 className='text-[#f17677] mt-24' style={{ fontSize: "45px", fontFamily: "Playfair Display", }}>REGISTER NOW FREE</h1>
          <p style={{ lineHeight: "1.2", marginBottom: "70px", fontWeight: "500", fontSize: "26px" }}>And find your special someone.</p>
          <form onSubmit={handleSubmit} className=" w-full  px-20 py-8">
            <div className='grid grid-cols-2 gap-8'>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-left text-left font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="shadow appearance-none border bg-white border-red-300 rounded-[50px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="gender" className="block text-gray-700 text-left font-bold mb-2">
                  Gender
                </label>
                <select
                  id="gender"
                  value={gender}
                  onChange={(event) => setGender(event.target.value)}
                  className="shadow appearance-none border bg-white border-red-300 rounded-[50px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                >
                  <option value="">-- Select Gender --</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="religion" className="block text-gray-700 text-left font-bold mb-2">
                  Religion
                </label>
                <select
                  id="religion"
                  value={religion}
                  onChange={(event) => setReligion(event.target.value)}
                  className="shadow appearance-none border bg-white border-red-300 rounded-[50px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                >
                  <option value="">-- Select Religion --</option>
                  <option value="muslim">Muslim</option>
                  <option value="hindu">Hindu</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 text-left font-bold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="shadow appearance-none border bg-white border-red-300 rounded-[50px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="profile-picture" className="block text-gray-700 text-left font-bold mb-2">
                  Profile Picture
                </label>
                <input
                  type="file"
                  id="profile-picture"
                  onChange={(event) => setProfilePicture(event.target.files[0])}
                  className="shadow appearance-none border bg-white border-red-300 rounded-[50px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="user-id" className="block text-gray-700 text-left font-bold mb-2">
                  User ID
                </label>
                <input
                  type="text"
                  id="user-id"
                  value={userId}
                  onChange={(event) => setUserId(event.target.value)}
                  className="shadow appearance-none border bg-white border-red-300 rounded-[50px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

            </div>
            <div className='gird justify-center text-center mt-4'>
              <input type="checkbox" name="termscheck" class="borbibi_input_field" checked="" />
              <label> I have read and agree to the
                <a href="/terms-condition" className='text-red-400'> T&amp;C </a>
                and
                <a href="/privacy-policy" className='text-red-400'> Privacy Policy</a>
              </label>
            </div>
            <div className="col-span-2">
              <button type="submit" className=" bg-red-400 mt-4 text-white font-bold py-4 px-12 rounded-[50px]">
                Register
              </button>
            </div>
          </form>
          <div className='flex justify-between px-40 pb-14'>
            <span>
              Already Have Account
              <a href='#' className='text-red-400'> Login</a>
            </span>
            <span>
              Already Registered
              <a href='#' className='text-red-400'> Active Account</a>
            </span>
          </div>
        </div>
      </div>


    </div>
  )
};

export default RegistrationForm;
