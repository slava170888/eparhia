using DuhovenstvoNET.Models.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace DuhovenstvoNET.API
{
    //[Authorize]
    public class PersonController : ApiController
    {
        PersonRepository _personR;
        public PersonController()
        {
            _personR = new PersonRepository();
        }

        [HttpGet]
        [ActionName("getpersons")]
        public HttpResponseMessage GetPersons(int id)
        {
            var result = _personR.GetPersons();

            return Request.CreateResponse(HttpStatusCode.OK, result);
        }

        //// GET api/<controller>
        ////[ActionName("getpersons")]
        //public IEnumerable<Models.Person> Get()
        //{
        //    var result = _personR.GetPersons();
        //    return result;
        //}

        //// GET api/<controller>/5
        //public string Get(int id)
        //{
        //    return "value";
        //}

        //// POST api/<controller>
        //public void Post([FromBody]string value)
        //{
        //}

        //// PUT api/<controller>/5
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        //// DELETE api/<controller>/5
        //public void Delete(int id)
        //{
        //}
    }
}