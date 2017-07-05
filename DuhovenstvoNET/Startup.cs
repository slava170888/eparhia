using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(DuhovenstvoNET.Startup))]
namespace DuhovenstvoNET
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
