import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {

    // earth api fetch
    const [earth, setearth] = useState([]);
    const [earloading, setearloading] =useState(true);
    useEffect(() => {
        const fetchData=()=>{fetch("https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&minlatitude=20.7&maxlatitude=26.6&minlongitude=88&maxlongitude=92.7").then((res)=> res.json()).then((e)=> {
            setearth(e);
            setearloading(false)
        });}

        fetchData();
        const autoreaload = setInterval(()=>{
            fetchData();
        }, 30000)
        return ()=> clearInterval(autoreaload);

    },[]);

    // service card text fetch
    const [text, settext]=useState([]);
    const [textload, settextload]=useState(true);
    useEffect(()=>{
        fetch("/servicecardtext.json").then((res)=> res.json()).then((dtext)=>settext(dtext))
    },[])
    // service card fetch
    const [service, setservice] = useState([]);
    useEffect(() => {
        fetch("/service.json").then((res) => res.json()).then((data) => setservice(data))
    }, [])

    // project fetch
    const [project, setproject] = useState([]);
    useEffect(() => {
        fetch("/project.json").then((res) => res.json()).then((projectd) => setproject(projectd))
    }, [])


    // Login
    const [login, setlogin] =useState(null);
    const CorrectEmail = "test@gmail.com";
    const CorrectPassword = "1234";

    const loginweb =(email, password)=>
    {
        if(CorrectEmail === email && CorrectPassword === password)
        {
            setlogin({email});
            return {success: true}
        }
        else
        {
            return {success: false, message: "Invalid Email or Password"}
        }
    }

    const logoutweb=()=> setlogin(null);

    // product
    const [product, setproduct] = useState([]);
    const [pload, setpload] = useState(true);
    useEffect(()=>{
        fetch("/product.json").then((res)=> res.json()).then((pdata)=>{ setproduct(pdata);
        setpload(false);
        });
    },[])
    
    const [selectcat, setselectcat]=useState("All");
    const catagories = ["All", ...new Set(product.map((m) => m.category))];
    const filter = selectcat === "All" ? product : product.filter((pr)=> pr.category === selectcat)

    const [addcard, setaddcard] =useState(0);
    console.log(addcard)

    const [productid, setproductid]=("")
    console.log(productid)
    const value = { service,text, earth, earloading, project,login,loginweb, logoutweb, product, pload,catagories, selectcat, setselectcat, filter, addcard, setaddcard, productid, setproductid}
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider