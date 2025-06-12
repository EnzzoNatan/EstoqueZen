function LoginPage(){
    return (
        <div className="bg-gray-300 rounded-3xl p-10 w-[400px] shadow-md flex flex-col items-center m-auto mt-32 ">
        
        <form className="w-full space-y-6">
            <div >
                <label className="text-sm font-semibold">Usuário:</label>
                <input type="text" className="w-full border-b-2 rounded-lg bg-gray-400  focus-outline-none mt-1" />
            </div>

            <div>
                <label className="text-sm font-semibold">Senha:</label>
                <input type="password" className="w-full border-b-2 rounded-lg bg-gray-400 focus-outline-none mt-1" />
            </div>

            <div className="flex justify-between mt-8">
                <button type="button" className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold hover:brightness-110">
                    Esqueci minha senha
                </button>

                <button type="submit" className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold hover:brightness-110">
                    Login
                </button>
            </div>
        </form>        
        </div>
    )
}

export default LoginPage