import logo from '@/assets/react.svg'
import '@/styles/form.css'

const Signup = () => {
  return (
    <main className='form-signin w-100 m-auto'>
      <form>
        <img
          className='mb-4'
          src={logo}
          alt='React'
          width='72'
          height='57'
        />
        <h1 className='h3 mb-3 fw-normal'>Please Sign Up</h1>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='first_name'
            name='first_name'
            placeholder='Jesua'
          />
          <label htmlFor='first_name'>First Name</label>
        </div>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='last_name'
            name='last_name'
            placeholder='Luján'
          />
          <label htmlFor='last_name'>Last Name</label>
        </div>

        <div className='form-floating'>
          <select
            className='form-select'
            id='gender'
            name='gender'
          >
            <option value=''>Choose</option>
            <option value='M'>Male</option>
            <option value='F'>Female</option>
          </select>
          <label htmlFor='gender'>Gender</label>
        </div>

        <div className='form-floating'>
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            placeholder='name@example.com'
          />
          <label htmlFor='email'>Email address</label>
        </div>

        <div className='form-floating'>
          <input
            type='password'
            className='form-control'
            id='password'
            name='password'
            placeholder='Password'
          />
          <label htmlFor='password'>Password</label>
        </div>

        <button className='btn btn-primary w-100 py-2' type='submit'>Sign up</button>
        <p className='mt-5 mb-3 text-body-secondary'>© 2017–2023</p>
      </form>
    </main>
  )
}

export default Signup
