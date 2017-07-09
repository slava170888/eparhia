using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DuhovenstvoNET.Models.Repository
{
    public class BaseRepository
    {
        private dbmlEparhiaDataContext _db;

        public BaseRepository()
        {
            _db = new dbmlEparhiaDataContext();
        }

        public dbmlEparhiaDataContext DB
        {
            get
            {
                return _db;
            }
        }
    }
}