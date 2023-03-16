import Debug "mo:base/Debug";
import Nat "mo:base/Nat";
import Int "mo:base/Int";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor DBank {
  var currentValue : Float = 4000;
  currentValue := 300;

  var startTime = Time.now();
  Debug.print(debug_show (startTime));

  // let id = 1234567890;
  // Debug.print(debug_show(id))

  public func topUp(amount : Float) {
    currentValue += amount;
    Debug.print(debug_show (currentValue));
  };

  public func withdrawl(amount : Float) {
    let tempValue : Float = currentValue - amount;
    if (tempValue >= 0) {
      currentValue -= amount;
      Debug.print(debug_show (currentValue));
    } else {
      Debug.print("there's an error");
    };
  };

  public query func currentAmount() : async Float {
    return currentValue;
  };

  public func compound() {
    let currentTime = Time.now();
    let timeEscapedNS = currentTime - startTime;
    let timeEscapedS = timeEscapedNS / 1000000000;
    currentValue := currentValue * (1.01 ** Float.fromInt(timeEscapedS));
    startTime := currentTime;
  };
};
