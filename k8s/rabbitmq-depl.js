// apiVersion: apps/v1
// kind: Deployment
// metadata:
//   name: rabbitmq-depl
// spec:
//   selector:
//     matchLabels:
//       app: rabbitmq

//   template:
//     metadata:
//       labels:
//         app: rabbitmq
//     spec:
//       containers:
//         - name: rabbitmq
//           image: "rabbitmq:3-management"
//           ports:
//             - containerPort: 15672
//             - containerPort: 5672
//           env:
//             - name: RABBITMQ_ERLANG_COOKIE
//               value: "SWQOKODSQALRPCLNMEQG"
//             - name: RABBITMQ_DEFAULT_USER
//               value: "guest"
//             - name: RABBITMQ_DEFAULT_PASS
//               value: "guest"
//             - name: RABBITMQ_DEFAULT_VHOST
//               value: "/"

// ---
// apiVersion: v1
// kind: Service
// metadata:
//   name: rabbitmq-srv
// spec:
//   type: LoadBalancer
//   ports:
//     - name: http
//       protocol: TCP
//       port: 15672
//     - name: amqp
//       protocol: TCP
//       port: 5672
//   selector:
//     app: rabbitmq
