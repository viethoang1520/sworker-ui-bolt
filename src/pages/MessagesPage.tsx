import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Search, MoreHorizontal, Send, Paperclip, Smile, ArrowLeft, Star, Pin, Phone, Video } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Avatar } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

interface Message {
  id: number;
  sender: string;
  content: string;
  timestamp: string;
  isMe?: boolean;
  avatar?: string;
}

interface Contact {
  id: number;
  name: string;
  role: string;
  lastMessage: string;
  timestamp: string;
  unread?: boolean;
  avatar?: string;
  isOnline?: boolean;
}

export const MessagesPage = () => {
  const navigate = useNavigate();
  const [selectedContact, setSelectedContact] = useState<number>(1);
  const [messageInput, setMessageInput] = useState("");

  const contacts: Contact[] = [
    {
      id: 1,
      name: "Jan Mayer",
      role: "Designer Candidate",
      lastMessage: "We want to invite you for a qui...",
      timestamp: "12 mins ago",
      avatar: "/api/placeholder/40/40",
      isOnline: true
    },
    {
      id: 2,
      name: "Joe Bartmann",
      role: "Designer",
      lastMessage: "Hey thanks for your interview...",
      timestamp: "3:40 PM",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 3,
      name: "Ally Wales",
      role: "Developer",
      lastMessage: "Hey thanks for your interview...",
      timestamp: "3:40 PM",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 4,
      name: "James Gardner",
      role: "Designer",
      lastMessage: "Hey thanks for your interview...",
      timestamp: "3:40 PM",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 5,
      name: "Allison Geidt",
      role: "Marketing",
      lastMessage: "Hey thanks for your interview...",
      timestamp: "3:40 PM",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 6,
      name: "Ruben Culhane",
      role: "Developer",
      lastMessage: "Hey thanks for your interview...",
      timestamp: "3:40 PM",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 7,
      name: "Lydia Diaz",
      role: "Designer",
      lastMessage: "Hey thanks for your interview...",
      timestamp: "3:40 PM",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 8,
      name: "James Dokidis",
      role: "Marketing",
      lastMessage: "Hey thanks for your interview...",
      timestamp: "3:40 PM",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 9,
      name: "Angelina Swann",
      role: "Designer",
      lastMessage: "Hey thanks for your interview...",
      timestamp: "3:40 PM",
      avatar: "/api/placeholder/40/40"
    }
  ];

  const messages: Message[] = [
    {
      id: 1,
      sender: "Jan Mayer",
      content: "Hey Jan, I wanted to reach out because we saw your work contributions and were impressed by your work.",
      timestamp: "12 mins ago",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 2,
      sender: "Jan Mayer",
      content: "We want to invite you for a quick interview",
      timestamp: "12 mins ago",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 3,
      sender: "Me",
      content: "Hi Maria, sure I would love to. Thanks for taking the time to see my work!",
      timestamp: "12 mins ago",
      isMe: true
    }
  ];

  const selectedContactData = contacts.find(c => c.id === selectedContact);

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      // Handle sending message
      setMessageInput("");
    }
  };

  return (
    <div className="h-screen bg-gray-50 flex flex-col overflow-hidden">
      {/* Main Messages Container */}
      <div className="flex-1 flex overflow-hidden">
        <div className="bg-white shadow-sm border-t overflow-hidden w-full h-full">
          <div className="flex h-full">
            {/* Sidebar */}
            <div className="w-80 border-r bg-white flex flex-col h-full">
              {/* Sidebar Header */}
              <div className="p-6 border-b bg-gray-50 flex-shrink-0">
                <div className="flex items-center space-x-3 mb-6">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => navigate(-1)}
                    className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    <ArrowLeft className="h-5 w-5 text-gray-600" />
                  </Button>
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    S
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Sworker</h3>
                    <p className="text-sm text-gray-600">Job Platform</p>
                  </div>
                </div>
                <h2 className="text-xl font-bold mb-4 text-gray-900">Messages</h2>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search conversations..."
                    className="pl-10 bg-white border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Contacts List */}
              <div className="flex-1 overflow-y-auto">
                {contacts.map((contact) => (
                  <div
                    key={contact.id}
                    className={`p-4 border-b cursor-pointer hover:bg-gray-50 transition-colors ${selectedContact === contact.id ? 'bg-blue-50 border-l-4 border-l-blue-600' : ''
                      }`}
                    onClick={() => setSelectedContact(contact.id)}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="relative">
                        <Avatar className="w-12 h-12">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                            {contact.name.split(' ').map(n => n[0]).join('')}
                          </div>
                        </Avatar>
                        {contact.isOnline && (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-sm truncate text-gray-900">{contact.name}</h4>
                          <span className="text-xs text-gray-500">{contact.timestamp}</span>
                        </div>
                        <p className="text-xs text-gray-600 truncate mb-1">{contact.role}</p>
                        <p className="text-xs text-gray-500 truncate">{contact.lastMessage}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Current User Profile */}
              <div className="p-4 border-t bg-gray-50 flex-shrink-0">
                <div className="flex items-center space-x-3">
                  <Avatar className="w-12 h-12">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      MK
                    </div>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm text-gray-900">Maria Kelly</h4>
                    <p className="text-xs text-gray-600">mariakelly@email.com</p>
                  </div>
                  <Badge className="bg-green-100 text-green-700 text-xs">Online</Badge>
                </div>
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col bg-white h-full">
              {selectedContactData ? (
                <>
                  {/* Chat Header */}
                  <div className="p-6 border-b bg-white flex items-center justify-between flex-shrink-0">
                    <div className="flex items-center space-x-4">
                      <Avatar className="w-14 h-14">
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center font-semibold text-lg">
                          {selectedContactData.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </Avatar>
                      <div>
                        <h3 className="font-bold text-xl text-gray-900">{selectedContactData.name}</h3>
                        <div className="flex items-center space-x-2">
                          <p className="text-gray-600">{selectedContactData.role}</p>
                          {selectedContactData.isOnline && (
                            <Badge className="bg-green-100 text-green-700 text-xs">Online</Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm" className="hover:bg-gray-100">
                        <Phone className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="hover:bg-gray-100">
                        <Video className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="hover:bg-gray-100">
                        <Pin className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="hover:bg-gray-100">
                        <Star className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="hover:bg-gray-100">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                      <Button className="ml-4 bg-blue-600 hover:bg-blue-700">View Profile</Button>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50">
                    <div className="text-center">
                      <Badge variant="secondary" className="text-xs bg-white text-gray-600 shadow-sm">Today</Badge>
                    </div>

                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.isMe ? 'justify-end' : 'justify-start'}`}
                      >
                        {!message.isMe && (
                          <Avatar className="w-10 h-10 mr-3 mt-1">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center text-xs font-semibold">
                              {message.sender.split(' ').map(n => n[0]).join('')}
                            </div>
                          </Avatar>
                        )}
                        <div
                          className={`max-w-lg rounded-2xl p-4 shadow-sm ${message.isMe
                            ? 'bg-blue-600 text-white'
                            : 'bg-white text-gray-900 border'
                            }`}
                        >
                          <p className="text-sm leading-relaxed">{message.content}</p>
                        </div>
                        {message.isMe && (
                          <Avatar className="w-10 h-10 ml-3 mt-1">
                            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-600 text-white rounded-full flex items-center justify-center text-xs font-semibold">
                              You
                            </div>
                          </Avatar>
                        )}
                      </div>
                    ))}

                    <div className="text-right">
                      <span className="text-xs text-gray-500">12 mins ago • Read</span>
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="p-6 border-t bg-white flex-shrink-0">
                    <div className="flex items-center space-x-4">
                      <div className="flex-1 relative">
                        <Input
                          placeholder="Type your message..."
                          value={messageInput}
                          onChange={(e) => setMessageInput(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                          className="pr-20 py-3 rounded-full border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        />
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                          <Button variant="ghost" size="sm" className="hover:bg-gray-100">
                            <Paperclip className="h-4 w-4 text-gray-400" />
                          </Button>
                          <Button variant="ghost" size="sm" className="hover:bg-gray-100">
                            <Smile className="h-4 w-4 text-gray-400" />
                          </Button>
                        </div>
                      </div>
                      <Button
                        onClick={handleSendMessage}
                        className="bg-blue-600 hover:bg-blue-700 rounded-full p-3"
                        disabled={!messageInput.trim()}
                      >
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center bg-gray-50">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Search className="h-8 w-8 text-gray-400" />
                    </div>
                    <p className="text-gray-500 text-lg">Select a conversation to start messaging</p>
                    <p className="text-gray-400 text-sm mt-2">Choose from your existing conversations or start a new one</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
