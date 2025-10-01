using Microsoft.AspNetCore.SignalR;
using SignalR.Services;

namespace SignalR.Hubs
{
    public class PizzaHub : Hub
    {
        private readonly PizzaManager _pizzaManager;

        public PizzaHub(PizzaManager pizzaManager) {
            _pizzaManager = pizzaManager;
        }

        public override async Task OnConnectedAsync()
        {
            _pizzaManager.AddUser();
            await Clients.All.SendAsync("UpdateNbUsers",  _pizzaManager.NbConnectedUsers);

            await base.OnConnectedAsync();
        }

        public override async Task OnDisconnectedAsync(Exception? exception)
        {
            _pizzaManager?.RemoveUser();
            await Clients.All.SendAsync("UpdateNbUsers", _pizzaManager.NbConnectedUsers);
            await base.OnConnectedAsync();
            
           
        }

        public async Task SelectChoice(PizzaChoice choice)
        {
            string group = _pizzaManager.GetGroupName(choice);
            await Clients.Group(group).SendAsync("SelectChoice", choice);
            await Clients.Group(group).SendAsync("price", 10);
        }

        public async Task UnselectChoice(PizzaChoice choice)
        {
            await Clients.Caller.SendAsync("UnselectChoice", choice);
        }

        public async Task AddMoney(PizzaChoice choice)
        {
            string group = _pizzaManager.GetGroupName(choice);
            _pizzaManager.IncreaseMoney(choice);
           // await Clients.Group(group).SendAsync("addMoney", _pizzaManager.Money);
            await Clients.Caller.SendAsync("addMoney", _pizzaManager.Money);
        }

        public async Task BuyPizza(PizzaChoice choice)
        {
          
            string group = _pizzaManager.GetGroupName(choice);
            _pizzaManager.BuyPizza(choice);
           
           // await Clients.Group(group).SendAsync("buyPizza", _pizzaManager.NbPizzas);
               await Clients.Caller.SendAsync("buyPizza", _pizzaManager.NbPizzas);
                await Clients.Caller.SendAsync("moneyLeft", _pizzaManager.Money);

               //await Clients.Group(group).SendAsync("buyPizza", _pizzaManager.NbPizzas);
               // await Clients.Group(group).SendAsync("moneyLeft", _pizzaManager.Money);

        }
    }
}
