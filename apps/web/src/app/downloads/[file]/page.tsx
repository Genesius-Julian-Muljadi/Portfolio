import axios from "axios";

export default async function DownloadFile({ params }: { params: Promise<{ file: string }> }) {
    try {
        const file: string = (await params).file;
        const data = await axios.get(process.env.NEXT_PUBLIC_BASE_API_URL + "/download/" + file);
        console.log(data.data);
    
        return (
            <div className="grid grid-cols-1 grid-rows-1 h-screen">
                <div className="m-auto text-3xl">
                    <p>Your file is being downloaded, I think...</p>
                    <div>
                        {/* {data.data} */}
                    </div>
                </div>
            </div>
        );
        // return data.data;
    } catch (err) {
        console.log(err);
    };
};