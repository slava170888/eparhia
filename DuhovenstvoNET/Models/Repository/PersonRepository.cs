using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DuhovenstvoNET.Models.Repository
{
    public class PersonRepository : BaseRepository
    {
        public PersonRepository()
        {

        }

        public List<PersonModel> GetPersons()
        {
            return DB.Persons.Select(x => new PersonModel
            {
                Id = x.Id,
                Id_PersonType = x.Id_PersonType,
                Name = x.Name,
                Name2 = x.Name2,
                Oblast = x.Oblast,
                Persone = x.Persone,
                Pole1 = x.Pole1,
                Pole2 = x.Pole2,
                PostIndex = x.PostIndex,
                Street = x.Street,
                WrittenRequest = x.WrittenRequest,
                City = x.City,
                Congratulations = x.Congratulations,
                Description = x.Description,
                Desiderate = x.Desiderate,
                dop = x.dop,
                Entitu = x.Entitu,
                Famile = x.Famile,
                Foreghn = x.Foreghn 
            }).ToList();
        }
    }
}