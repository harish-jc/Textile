import { useForm } from '@inertiajs/react';

export default function Login() {
  const { data, setData, post, errors } = useForm({
    email: '',
    password: '',
    remember: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('admin.login.submit'));
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow-md rounded">
      <h2 className="text-xl font-semibold mb-4">Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="w-full border p-2 mb-4"
          placeholder="Email"
          value={data.email}
          onChange={(e) => setData('email', e.target.value)}
        />
        <input
          type="password"
          className="w-full border p-2 mb-4"
          placeholder="Password"
          value={data.password}
          onChange={(e) => setData('password', e.target.value)}
        />
        {errors.email && <div className="text-red-500 mb-2">{errors.email}</div>}
        <label className="block mb-2">
          <input
            type="checkbox"
            checked={data.remember}
            onChange={(e) => setData('remember', e.target.checked)}
          /> Remember me
        </label>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
