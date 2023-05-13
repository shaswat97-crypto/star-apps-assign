//Approach
//we are trying to find the maximum distance that can be covered
//in any window, starting from 0, 0
//when a new window is formed, which means we changed the plane
//so increment the plane count.
//If the window has not moved, we are sure that we cant reach the end

function solve(arr) {
    //initialize ans as 0
  let ans = 0;

  //initialize left boundary and right boundary as 0
  let l = 0,
    r = 0,
    n = arr.length;


  while (r < n) {
    //calculate the most distance that can be covered in the current window
    mostDist = 0;
    for (let i = l; i <= r; i++) {
      mostDist = Math.max(mostDist, i + arr[i]);
    }

    //if window has not moved, we cant reach the end
    if (mostDist <= r) return -1;

    //else move window to its new position
    l = r + 1;
    r = mostDist;

    //increment the count of planes
    ans++;
  }
  return ans;
}
