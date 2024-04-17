import React from 'react'

function Footer() {
    return (
        <section className="bg-black">
            <div className="container mx-auto">
                <div className="md:flex flex-wrap">
                    <div className="md:w-1/2 p-10 w-full">
                        <h1 className="text-3xl text-white font-bold">Trippy</h1>
                        <p className="mt-3 text-gray-400">Choose Your Favourite Destination</p>
                    </div>
                    <div className="md:w-1/2 lg:px-5 md:py-10 w-full ">
                        <ul className="flex text-gray-400 md:ml-40 ml-10 lg:ml-96 md:mt-2">
                            <li className="p-2 bg-white rounded shadow mr-2">
                                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 " viewBox="0 0 24 24">
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>
                            </li>
                            <li className="p-2 bg-white rounded shadow mr-2">
                                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z" />
                                </svg>
                            </li>
                            <li className="p-2 bg-white rounded shadow mr-2">
                                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </li>
                            <li className="p-2 bg-white rounded shadow mr-2">
                                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                            </li>
                            <li className="p-2 bg-white rounded shadow mr-2">
                                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                </svg>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-wrap lg:px-32 px-10 pb-10 text-gray-400 ">
                    <div className="md:w-1/4 w-1/2 mt-5 md:mt-0">
                        <h1 className="text-lg font-bold text-white">Project</h1>
                        <p>Changelog</p>
                        <p>status</p>
                        <p>License</p>
                        <p>All Versions</p>
                    </div>
                    <div className="md:w-1/4 w-1/2 mt-5 md:mt-0">
                        <h1 className="text-lg font-bold text-white">Community</h1>
                        <p>Changelog</p>
                        <p>status</p>
                        <p>License</p>
                        <p>All Versions</p>
                    </div>
                    <div className="md:w-1/4 mt-5 md:mt-0">
                        <h1 className="text-lg font-bold text-white">Help</h1>
                        <p>Changelog</p>
                        <p>status</p>
                        <p>License</p>
                        <p>All Versions</p>
                    </div>
                    <div className="md:w-1/4 mt-5 md:mt-0 ml-16 md:ml-0">
                        <h1 className="text-lg font-bold text-white">Others</h1>
                        <p>Changelog</p>
                        <p>status</p>
                        <p>License</p>
                        <p>All Versions</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer

