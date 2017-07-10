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
                Name = x.Name ?? "(не указано)",
                Name2 = x.Name2 ?? "(не указано)",
                Oblast = x.Oblast ?? "(не указано)",
                Persone = x.Persone ?? "(не указано)",
                Pole1 = x.Pole1 ?? "(не указано)",
                Pole2 = x.Pole2 ?? "(не указано)",
                PostIndex = x.PostIndex ?? "(не указано)",
                Street = x.Street ?? "(не указано)",
                WrittenRequest = x.WrittenRequest ?? "(не указано)",
                City = x.City ?? "(не указано)",
                Congratulations = x.Congratulations ?? "(не указано)",
                Description = x.Description ?? "(не указано)",
                Desiderate = x.Desiderate ?? "(не указано)",
                dop = x.dop ?? "(не указано)",
                Entitu = x.Entitu ?? "(не указано)",
                Famile = x.Famile ?? "(не указано)",
                Foreghn = x.Foreghn,
                Consecration = x.Consecration 
            }).ToList();
        }
    }
}