using System.Web.Http;
using Newtonsoft.Json.Serialization;

namespace DuhovenstvoNET
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            //config.IgnoreRoute("{resource}.axd/{*pathInfo}");

            config.Routes.MapHttpRoute(
               name: "DefaultApiWithAction",
               routeTemplate: "api/{controller}/{action}/{id}",
               defaults: new { id = RouteParameter.Optional }
           );

            // config.Routes.MapHttpRoute(
            //    name: "DefaultApiWithAction2",
            //    routeTemplate: "api/{controller}/{action}/{contractnumber}"
            //);

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );


            //config.Routes.MapHttpRoute(
            //    name: "DefaultApiWithAction", 
            //    routeTemplate: "Api/{controller}/{action}"
            //);

            //config.Routes.MapHttpRoute(
            //    name: "DefaultApi",
            //    routeTemplate: "api/{controller}/{id}",
            //    defaults: new { id = RouteParameter.Optional }
            //);

            //config.Routes.MapHttpRoute(
            //    name: "DefaultApiWithId",
            //    routeTemplate: "Api/{controller}/{id}",
            //    defaults: new { id = RouteParameter.Optional },
            //    constraints: new { id = @"\d+" }
            //);

            //config.Routes.MapHttpRoute(
            //    name: "DefaultApiGet",
            //    routeTemplate: "Api/{controller}/{action}/{id}",
            //    defaults: new { action = "Get" },
            //    constraints: new { httpMethod = new HttpMethodConstraint(HttpMethod.Get) }
            //);

            //config.Routes.MapHttpRoute(
            //    name: "DefaultApiPost",
            //    routeTemplate: "Api/{controller}/{action}/{id}",
            //    defaults: new { action = "Post" },
            //    constraints: new { httpMethod = new HttpMethodConstraint(HttpMethod.Post) }
            //);



            //config.EnableQuerySupport();

            //// To disable tracing in your application, please comment out or remove the following line of code
            //// For more information, refer to: http://www.asp.net/web-api
            //config.EnableSystemDiagnosticsTracing();

            //// Use camel case for JSON data.
            config.Formatters.JsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
        }
    }
}
