
import RegisterForm from "../_components/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className="w-full max-w-lg space-y-6 rounded-2xl border p-8 shadow-lg">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Create Your RentNest Account</h1>
          <p className="text-sm text-muted-foreground">
            Choose a role and create your account to get started.
          </p>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
}