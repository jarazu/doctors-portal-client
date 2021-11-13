import { useContext } from "react";
import { AuthContext } from "../contexts/Authprovider/Authprovider";

const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
}
export default useAuth;