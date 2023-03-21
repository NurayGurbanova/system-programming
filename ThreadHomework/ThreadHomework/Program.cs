namespace ThreadHomework
{ 
    internal class Program
    {
        /* 1 
        static void func_start() 
        { 
            for (int i = 0; i < 10; i++) 
            { 
                Console.WriteLine("Function start"); 
            } 
        } 
 
        static void func_out() 
        { 
            Thread th = new Thread(func_start); 
            th.Start(); 
            th.Join(); 
            Console.WriteLine("Function finished"); 
        } 
 
        static void Main(string[] args) 
        { 
            func_out(); 
        } 
        */

        //2 
        static void func_start()
        {
            for (int i = 0; i < 10; i++)
            {
                Console.WriteLine("Function start");
            }
        }

        static void Main(string[] args)
        {
            Thread th = new Thread(func_start);
            int choice = Convert.ToInt32(Console.ReadLine());

            switch (choice)
            {
                case 1:
                    th.Start();
                    th.Join();
                    Console.WriteLine("Function finished");
                    break;
                case 2:
                    Console.WriteLine("Thread is abort");
                    break;
                    th.Start();
                    Console.WriteLine("Main aborting new thread.");
                    th.Abort();
            }
        }
    }
}
