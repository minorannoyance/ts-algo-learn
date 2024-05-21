namespace PrimeService.Tests { 

    public class Algos {

        public static void QuickSort( int[]  arr ) {
            QuickSortRec( arr, 0, arr.Length );
        }


        public static void QuickSortRec( int[] arr, int min, int max ) {
            
            if (min >= max) return;

            int pivotVal = arr[max-1];
            int middleIndex = min-1;
            for ( int index = min; index < max-1; index++ )
            {
                if (arr[index] < pivotVal )
                {
                    middleIndex++;
                    int temp = arr[middleIndex];
                    arr[middleIndex] = arr[index];
                    arr[index] = temp;
                }
            }

            middleIndex++;
            int temp2 = arr[middleIndex];
            arr[middleIndex] = arr[max-1];
            arr[max-1] = temp2;

            QuickSortRec(arr, min, middleIndex);
            QuickSortRec(arr, middleIndex + 1, max);
        }

    }

    public class Quicksort
    {
        [Fact]
        public void Test1()
        {
            List<int> unsortedList = new();
            Random rand = new Random(1);
            for (int i=0; i<20; i++)
            {
                unsortedList.Add(rand.Next(0, 100));
            }


            int[] copiedList = new List<int>( unsortedList ).ToArray();
            Array.Sort(copiedList);

            int[] copiedList2 = new List<int>(unsortedList).ToArray();
            Algos.QuickSort(copiedList2);
            Assert.Equal( copiedList, copiedList2 );
        }
    }
}