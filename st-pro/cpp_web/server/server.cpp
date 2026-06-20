#include <boost/beast/core.hpp>
#include <boost/beast/websocket.hpp>
#include <boost/asio/ip/tcp.hpp>
#include <iostream>
#include <string.h>
#include <string>

namespace beast = boost::beast;
namespace websocket = beast::websocket;
namespace net = boost::asio;
using tcp = net::ip::tcp;

int main()
{
    std ::string my = "Hello";
    try
    {
        net::io_context ioc;

        tcp::acceptor acceptor(
            ioc,
            tcp::endpoint(tcp::v4(), 8080));

        std::cout << "WebSocket server running on port 8080\n";

        while (true)
        {
            tcp::socket socket(ioc);

            acceptor.accept(socket);

            websocket::stream<tcp::socket> ws(std::move(socket));

            ws.accept();

            std::cout << "Client connected\n";

            while (true)
            {
                beast::flat_buffer buffer;

                ws.read(buffer);

                std::string msg =
                    beast::buffers_to_string(buffer.data());

                std::cout << "Received: "
                          << msg << '\n';

                ws.write(
                    net::buffer(my + msg));
            }
        }
    }
    catch (std::exception const &e)
    {
        std::cerr << "Error: "
                  << e.what()
                  << '\n';
    }
}