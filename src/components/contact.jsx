import React from "react";
import Title from "./Title";

function Contact () {
    
    return (
        <div className="flex flex-col mb-10 mx-auto">
            <div className="flex justify-center items-center">
                <form 
                    action="https://getform.io/f/a4e61b4a-16d1-41a0-9d77-c38a35446efe"
                    method="POST"
                    className="flex flex-col w-full md:w-7/12"
                    >
                        <Title>Kontaktskjema</Title>
                        <input 
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="p-2 bg-transparent border-2 rounded-md focus:outline-none">
                        </input>
                        <input 
                        type="text"
                        name="email"
                        placeholder="Email"
                        className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none">
                        </input>
                        <textarea
                            name="message"
                            placeholder="Message"
                            rows="10"
                            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none">
                        </textarea>
                        <button 
                            type="button"
                            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-400 to-blue-700 drop-shadow-md">
                            Ta kontakt!
                        </button>
                </form>

            </div>
            
        </div>
    )
}

export default Contact;