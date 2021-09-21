﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AuthServer.Models
{
    public class UserRepository : IUserRepository
    {
        private readonly UserDbContext _context;
        public UserRepository(UserDbContext context)
        {
            _context = context;
        }

        public User Register(User user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();
            return user;
        }

        public User Login(string email, string password)
        {
            var _user = _context.Users.FirstOrDefault(u => u.Email == email && u.Password == password);
            return _user;
        }

        public User FindUserByEmail(string email)
        {
            var _user = _context.Users.FirstOrDefault(u => u.Email == email);
            return _user;
        }

    }
}
