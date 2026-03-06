import Map "mo:core/Map";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";
import Order "mo:core/Order";
import Text "mo:core/Text";
import Iter "mo:core/Iter";

actor {
  type ServiceType = {
    #endOfLease;
    #carpetCleaning;
    #windowCleaning;
    #pestControl;
    #other;
  };

  module ContactSubmission {
    public type Id = Nat;

    public type Simplified = {
      id : Id;
      name : Text;
      email : Text;
      phone : Text;
      serviceType : ServiceType;
      message : Text;
      timestamp : Time.Time;
    };

    public type Full = Simplified;

    public func compare(submission1 : Simplified, submission2 : Simplified) : Order.Order {
      Nat.compare(submission1.id, submission2.id);
    };
  };

  var nextSubmissionId = 1;
  let submissions = Map.empty<ContactSubmission.Id, ContactSubmission.Full>();

  public shared ({ caller }) func submitContact(
    name : Text,
    email : Text,
    phone : Text,
    serviceType : ServiceType,
    message : Text,
  ) : async ContactSubmission.Id {
    let id = nextSubmissionId;
    nextSubmissionId += 1;

    let submission : ContactSubmission.Full = {
      id;
      name;
      email;
      phone;
      serviceType;
      message;
      timestamp = Time.now();
    };

    submissions.add(id, submission);
    id;
  };

  public query ({ caller }) func getAllSubmissions() : async [ContactSubmission.Simplified] {
    submissions.values().toArray().sort();
  };

  public query ({ caller }) func getSubmissionById(id : ContactSubmission.Id) : async ContactSubmission.Simplified {
    switch (submissions.get(id)) {
      case (null) { Runtime.trap("Submission not found") };
      case (?submission) { submission };
    };
  };
};
