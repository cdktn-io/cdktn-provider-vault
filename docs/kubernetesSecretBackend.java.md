# `kubernetesSecretBackend` Submodule <a name="`kubernetesSecretBackend` Submodule" id="@cdktn/provider-vault.kubernetesSecretBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesSecretBackend <a name="KubernetesSecretBackend" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kubernetes_secret_backend vault_kubernetes_secret_backend}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer"></a>

```java
import io.cdktn.providers.vault.kubernetes_secret_backend.KubernetesSecretBackend;

KubernetesSecretBackend.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .path(java.lang.String)
//  .allowedManagedKeys(java.util.List<java.lang.String>)
//  .allowedResponseHeaders(java.util.List<java.lang.String>)
//  .auditNonHmacRequestKeys(java.util.List<java.lang.String>)
//  .auditNonHmacResponseKeys(java.util.List<java.lang.String>)
//  .defaultLeaseTtlSeconds(java.lang.Number)
//  .delegatedAuthAccessors(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .disableLocalCaJwt(java.lang.Boolean|IResolvable)
//  .externalEntropyAccess(java.lang.Boolean|IResolvable)
//  .forceNoCache(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .identityTokenKey(java.lang.String)
//  .kubernetesCaCert(java.lang.String)
//  .kubernetesHost(java.lang.String)
//  .listingVisibility(java.lang.String)
//  .local(java.lang.Boolean|IResolvable)
//  .maxLeaseTtlSeconds(java.lang.Number)
//  .namespace(java.lang.String)
//  .options(java.util.Map<java.lang.String, java.lang.String>)
//  .passthroughRequestHeaders(java.util.List<java.lang.String>)
//  .pluginVersion(java.lang.String)
//  .sealWrap(java.lang.Boolean|IResolvable)
//  .serviceAccountJwt(java.lang.String)
//  .serviceAccountJwtWo(java.lang.String)
//  .serviceAccountJwtWoVersion(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.path">path</a></code> | <code>java.lang.String</code> | Where the secret backend will be mounted. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.allowedManagedKeys">allowedManagedKeys</a></code> | <code>java.util.List<java.lang.String></code> | List of managed key registry entry names that the mount in question is allowed to access. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.allowedResponseHeaders">allowedResponseHeaders</a></code> | <code>java.util.List<java.lang.String></code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.auditNonHmacRequestKeys">auditNonHmacRequestKeys</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the list of keys that will not be HMAC'd by audit devices in the request data object. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.auditNonHmacResponseKeys">auditNonHmacResponseKeys</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the list of keys that will not be HMAC'd by audit devices in the response data object. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.defaultLeaseTtlSeconds">defaultLeaseTtlSeconds</a></code> | <code>java.lang.Number</code> | Default lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.delegatedAuthAccessors">delegatedAuthAccessors</a></code> | <code>java.util.List<java.lang.String></code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Human-friendly description of the mount. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.disableLocalCaJwt">disableLocalCaJwt</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Disable defaulting to the local CA certificate and service account JWT when running in a Kubernetes pod. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.externalEntropyAccess">externalEntropyAccess</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enable the secrets engine to access Vault's external entropy source. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.forceNoCache">forceNoCache</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set to true, disables caching. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kubernetes_secret_backend#id KubernetesSecretBackend#id}. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.identityTokenKey">identityTokenKey</a></code> | <code>java.lang.String</code> | The key to use for signing plugin workload identity tokens. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.kubernetesCaCert">kubernetesCaCert</a></code> | <code>java.lang.String</code> | A PEM-encoded CA certificate used by the secret engine to verify the Kubernetes API server certificate. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.kubernetesHost">kubernetesHost</a></code> | <code>java.lang.String</code> | The Kubernetes API URL to connect to. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.listingVisibility">listingVisibility</a></code> | <code>java.lang.String</code> | Specifies whether to show this mount in the UI-specific listing endpoint. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.local">local</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Local mount flag that can be explicitly set to true to enforce local mount in HA environment. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.maxLeaseTtlSeconds">maxLeaseTtlSeconds</a></code> | <code>java.lang.Number</code> | Maximum possible lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.options">options</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Specifies mount type specific options that are passed to the backend. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.passthroughRequestHeaders">passthroughRequestHeaders</a></code> | <code>java.util.List<java.lang.String></code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.pluginVersion">pluginVersion</a></code> | <code>java.lang.String</code> | Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.sealWrap">sealWrap</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.serviceAccountJwt">serviceAccountJwt</a></code> | <code>java.lang.String</code> | The JSON web token of the service account used by the secrets engine to manage Kubernetes credentials. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.serviceAccountJwtWo">serviceAccountJwtWo</a></code> | <code>java.lang.String</code> | Write-only JSON web token of the service account used by the secrets engine to manage Kubernetes credentials. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.serviceAccountJwtWoVersion">serviceAccountJwtWoVersion</a></code> | <code>java.lang.Number</code> | Version counter for write-only service account JWT. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.path"></a>

- *Type:* java.lang.String

Where the secret backend will be mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kubernetes_secret_backend#path KubernetesSecretBackend#path}

---

##### `allowedManagedKeys`<sup>Optional</sup> <a name="allowedManagedKeys" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.allowedManagedKeys"></a>

- *Type:* java.util.List<java.lang.String>

List of managed key registry entry names that the mount in question is allowed to access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kubernetes_secret_backend#allowed_managed_keys KubernetesSecretBackend#allowed_managed_keys}

---

##### `allowedResponseHeaders`<sup>Optional</sup> <a name="allowedResponseHeaders" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.allowedResponseHeaders"></a>

- *Type:* java.util.List<java.lang.String>

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kubernetes_secret_backend#allowed_response_headers KubernetesSecretBackend#allowed_response_headers}

---

##### `auditNonHmacRequestKeys`<sup>Optional</sup> <a name="auditNonHmacRequestKeys" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.auditNonHmacRequestKeys"></a>

- *Type:* java.util.List<java.lang.String>

Specifies the list of keys that will not be HMAC'd by audit devices in the request data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kubernetes_secret_backend#audit_non_hmac_request_keys KubernetesSecretBackend#audit_non_hmac_request_keys}

---

##### `auditNonHmacResponseKeys`<sup>Optional</sup> <a name="auditNonHmacResponseKeys" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.auditNonHmacResponseKeys"></a>

- *Type:* java.util.List<java.lang.String>

Specifies the list of keys that will not be HMAC'd by audit devices in the response data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kubernetes_secret_backend#audit_non_hmac_response_keys KubernetesSecretBackend#audit_non_hmac_response_keys}

---

##### `defaultLeaseTtlSeconds`<sup>Optional</sup> <a name="defaultLeaseTtlSeconds" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.defaultLeaseTtlSeconds"></a>

- *Type:* java.lang.Number

Default lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kubernetes_secret_backend#default_lease_ttl_seconds KubernetesSecretBackend#default_lease_ttl_seconds}

---

##### `delegatedAuthAccessors`<sup>Optional</sup> <a name="delegatedAuthAccessors" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.delegatedAuthAccessors"></a>

- *Type:* java.util.List<java.lang.String>

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kubernetes_secret_backend#delegated_auth_accessors KubernetesSecretBackend#delegated_auth_accessors}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Human-friendly description of the mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kubernetes_secret_backend#description KubernetesSecretBackend#description}

---

##### `disableLocalCaJwt`<sup>Optional</sup> <a name="disableLocalCaJwt" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.disableLocalCaJwt"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Disable defaulting to the local CA certificate and service account JWT when running in a Kubernetes pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kubernetes_secret_backend#disable_local_ca_jwt KubernetesSecretBackend#disable_local_ca_jwt}

---

##### `externalEntropyAccess`<sup>Optional</sup> <a name="externalEntropyAccess" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.externalEntropyAccess"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enable the secrets engine to access Vault's external entropy source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kubernetes_secret_backend#external_entropy_access KubernetesSecretBackend#external_entropy_access}

---

##### `forceNoCache`<sup>Optional</sup> <a name="forceNoCache" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.forceNoCache"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set to true, disables caching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kubernetes_secret_backend#force_no_cache KubernetesSecretBackend#force_no_cache}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kubernetes_secret_backend#id KubernetesSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityTokenKey`<sup>Optional</sup> <a name="identityTokenKey" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.identityTokenKey"></a>

- *Type:* java.lang.String

The key to use for signing plugin workload identity tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kubernetes_secret_backend#identity_token_key KubernetesSecretBackend#identity_token_key}

---

##### `kubernetesCaCert`<sup>Optional</sup> <a name="kubernetesCaCert" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.kubernetesCaCert"></a>

- *Type:* java.lang.String

A PEM-encoded CA certificate used by the secret engine to verify the Kubernetes API server certificate.

Defaults to the local pod’s CA if found, or otherwise the host's root CA set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kubernetes_secret_backend#kubernetes_ca_cert KubernetesSecretBackend#kubernetes_ca_cert}

---

##### `kubernetesHost`<sup>Optional</sup> <a name="kubernetesHost" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.kubernetesHost"></a>

- *Type:* java.lang.String

The Kubernetes API URL to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kubernetes_secret_backend#kubernetes_host KubernetesSecretBackend#kubernetes_host}

---

##### `listingVisibility`<sup>Optional</sup> <a name="listingVisibility" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.listingVisibility"></a>

- *Type:* java.lang.String

Specifies whether to show this mount in the UI-specific listing endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kubernetes_secret_backend#listing_visibility KubernetesSecretBackend#listing_visibility}

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.local"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Local mount flag that can be explicitly set to true to enforce local mount in HA environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kubernetes_secret_backend#local KubernetesSecretBackend#local}

---

##### `maxLeaseTtlSeconds`<sup>Optional</sup> <a name="maxLeaseTtlSeconds" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.maxLeaseTtlSeconds"></a>

- *Type:* java.lang.Number

Maximum possible lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kubernetes_secret_backend#max_lease_ttl_seconds KubernetesSecretBackend#max_lease_ttl_seconds}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kubernetes_secret_backend#namespace KubernetesSecretBackend#namespace}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.options"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Specifies mount type specific options that are passed to the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kubernetes_secret_backend#options KubernetesSecretBackend#options}

---

##### `passthroughRequestHeaders`<sup>Optional</sup> <a name="passthroughRequestHeaders" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.passthroughRequestHeaders"></a>

- *Type:* java.util.List<java.lang.String>

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kubernetes_secret_backend#passthrough_request_headers KubernetesSecretBackend#passthrough_request_headers}

---

##### `pluginVersion`<sup>Optional</sup> <a name="pluginVersion" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.pluginVersion"></a>

- *Type:* java.lang.String

Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kubernetes_secret_backend#plugin_version KubernetesSecretBackend#plugin_version}

---

##### `sealWrap`<sup>Optional</sup> <a name="sealWrap" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.sealWrap"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kubernetes_secret_backend#seal_wrap KubernetesSecretBackend#seal_wrap}

---

##### `serviceAccountJwt`<sup>Optional</sup> <a name="serviceAccountJwt" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.serviceAccountJwt"></a>

- *Type:* java.lang.String

The JSON web token of the service account used by the secrets engine to manage Kubernetes credentials.

Defaults to the local pod’s JWT if found.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kubernetes_secret_backend#service_account_jwt KubernetesSecretBackend#service_account_jwt}

---

##### `serviceAccountJwtWo`<sup>Optional</sup> <a name="serviceAccountJwtWo" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.serviceAccountJwtWo"></a>

- *Type:* java.lang.String

Write-only JSON web token of the service account used by the secrets engine to manage Kubernetes credentials.

This value will not be stored in state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kubernetes_secret_backend#service_account_jwt_wo KubernetesSecretBackend#service_account_jwt_wo}

---

##### `serviceAccountJwtWoVersion`<sup>Optional</sup> <a name="serviceAccountJwtWoVersion" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.serviceAccountJwtWoVersion"></a>

- *Type:* java.lang.Number

Version counter for write-only service account JWT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kubernetes_secret_backend#service_account_jwt_wo_version KubernetesSecretBackend#service_account_jwt_wo_version}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetAllowedManagedKeys">resetAllowedManagedKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetAllowedResponseHeaders">resetAllowedResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetAuditNonHmacRequestKeys">resetAuditNonHmacRequestKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetAuditNonHmacResponseKeys">resetAuditNonHmacResponseKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetDefaultLeaseTtlSeconds">resetDefaultLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetDelegatedAuthAccessors">resetDelegatedAuthAccessors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetDisableLocalCaJwt">resetDisableLocalCaJwt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetExternalEntropyAccess">resetExternalEntropyAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetForceNoCache">resetForceNoCache</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetIdentityTokenKey">resetIdentityTokenKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetKubernetesCaCert">resetKubernetesCaCert</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetKubernetesHost">resetKubernetesHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetListingVisibility">resetListingVisibility</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetLocal">resetLocal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetMaxLeaseTtlSeconds">resetMaxLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetPassthroughRequestHeaders">resetPassthroughRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetPluginVersion">resetPluginVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetSealWrap">resetSealWrap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetServiceAccountJwt">resetServiceAccountJwt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetServiceAccountJwtWo">resetServiceAccountJwtWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetServiceAccountJwtWoVersion">resetServiceAccountJwtWoVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAllowedManagedKeys` <a name="resetAllowedManagedKeys" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetAllowedManagedKeys"></a>

```java
public void resetAllowedManagedKeys()
```

##### `resetAllowedResponseHeaders` <a name="resetAllowedResponseHeaders" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetAllowedResponseHeaders"></a>

```java
public void resetAllowedResponseHeaders()
```

##### `resetAuditNonHmacRequestKeys` <a name="resetAuditNonHmacRequestKeys" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetAuditNonHmacRequestKeys"></a>

```java
public void resetAuditNonHmacRequestKeys()
```

##### `resetAuditNonHmacResponseKeys` <a name="resetAuditNonHmacResponseKeys" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetAuditNonHmacResponseKeys"></a>

```java
public void resetAuditNonHmacResponseKeys()
```

##### `resetDefaultLeaseTtlSeconds` <a name="resetDefaultLeaseTtlSeconds" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetDefaultLeaseTtlSeconds"></a>

```java
public void resetDefaultLeaseTtlSeconds()
```

##### `resetDelegatedAuthAccessors` <a name="resetDelegatedAuthAccessors" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetDelegatedAuthAccessors"></a>

```java
public void resetDelegatedAuthAccessors()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisableLocalCaJwt` <a name="resetDisableLocalCaJwt" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetDisableLocalCaJwt"></a>

```java
public void resetDisableLocalCaJwt()
```

##### `resetExternalEntropyAccess` <a name="resetExternalEntropyAccess" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetExternalEntropyAccess"></a>

```java
public void resetExternalEntropyAccess()
```

##### `resetForceNoCache` <a name="resetForceNoCache" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetForceNoCache"></a>

```java
public void resetForceNoCache()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetId"></a>

```java
public void resetId()
```

##### `resetIdentityTokenKey` <a name="resetIdentityTokenKey" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetIdentityTokenKey"></a>

```java
public void resetIdentityTokenKey()
```

##### `resetKubernetesCaCert` <a name="resetKubernetesCaCert" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetKubernetesCaCert"></a>

```java
public void resetKubernetesCaCert()
```

##### `resetKubernetesHost` <a name="resetKubernetesHost" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetKubernetesHost"></a>

```java
public void resetKubernetesHost()
```

##### `resetListingVisibility` <a name="resetListingVisibility" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetListingVisibility"></a>

```java
public void resetListingVisibility()
```

##### `resetLocal` <a name="resetLocal" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetLocal"></a>

```java
public void resetLocal()
```

##### `resetMaxLeaseTtlSeconds` <a name="resetMaxLeaseTtlSeconds" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetMaxLeaseTtlSeconds"></a>

```java
public void resetMaxLeaseTtlSeconds()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetOptions` <a name="resetOptions" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetOptions"></a>

```java
public void resetOptions()
```

##### `resetPassthroughRequestHeaders` <a name="resetPassthroughRequestHeaders" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetPassthroughRequestHeaders"></a>

```java
public void resetPassthroughRequestHeaders()
```

##### `resetPluginVersion` <a name="resetPluginVersion" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetPluginVersion"></a>

```java
public void resetPluginVersion()
```

##### `resetSealWrap` <a name="resetSealWrap" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetSealWrap"></a>

```java
public void resetSealWrap()
```

##### `resetServiceAccountJwt` <a name="resetServiceAccountJwt" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetServiceAccountJwt"></a>

```java
public void resetServiceAccountJwt()
```

##### `resetServiceAccountJwtWo` <a name="resetServiceAccountJwtWo" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetServiceAccountJwtWo"></a>

```java
public void resetServiceAccountJwtWo()
```

##### `resetServiceAccountJwtWoVersion` <a name="resetServiceAccountJwtWoVersion" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetServiceAccountJwtWoVersion"></a>

```java
public void resetServiceAccountJwtWoVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a KubernetesSecretBackend resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.isConstruct"></a>

```java
import io.cdktn.providers.vault.kubernetes_secret_backend.KubernetesSecretBackend;

KubernetesSecretBackend.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.kubernetes_secret_backend.KubernetesSecretBackend;

KubernetesSecretBackend.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.isTerraformResource"></a>

```java
import io.cdktn.providers.vault.kubernetes_secret_backend.KubernetesSecretBackend;

KubernetesSecretBackend.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.kubernetes_secret_backend.KubernetesSecretBackend;

KubernetesSecretBackend.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),KubernetesSecretBackend.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a KubernetesSecretBackend resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the KubernetesSecretBackend to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing KubernetesSecretBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kubernetes_secret_backend#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the KubernetesSecretBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.accessor">accessor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.allowedManagedKeysInput">allowedManagedKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.allowedResponseHeadersInput">allowedResponseHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.auditNonHmacRequestKeysInput">auditNonHmacRequestKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.auditNonHmacResponseKeysInput">auditNonHmacResponseKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.defaultLeaseTtlSecondsInput">defaultLeaseTtlSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.delegatedAuthAccessorsInput">delegatedAuthAccessorsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.disableLocalCaJwtInput">disableLocalCaJwtInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.externalEntropyAccessInput">externalEntropyAccessInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.forceNoCacheInput">forceNoCacheInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.identityTokenKeyInput">identityTokenKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.kubernetesCaCertInput">kubernetesCaCertInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.kubernetesHostInput">kubernetesHostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.listingVisibilityInput">listingVisibilityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.localInput">localInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.maxLeaseTtlSecondsInput">maxLeaseTtlSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.optionsInput">optionsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.passthroughRequestHeadersInput">passthroughRequestHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.pluginVersionInput">pluginVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.sealWrapInput">sealWrapInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.serviceAccountJwtInput">serviceAccountJwtInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.serviceAccountJwtWoInput">serviceAccountJwtWoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.serviceAccountJwtWoVersionInput">serviceAccountJwtWoVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.allowedManagedKeys">allowedManagedKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.allowedResponseHeaders">allowedResponseHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.auditNonHmacRequestKeys">auditNonHmacRequestKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.auditNonHmacResponseKeys">auditNonHmacResponseKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.defaultLeaseTtlSeconds">defaultLeaseTtlSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.delegatedAuthAccessors">delegatedAuthAccessors</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.disableLocalCaJwt">disableLocalCaJwt</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.externalEntropyAccess">externalEntropyAccess</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.forceNoCache">forceNoCache</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.identityTokenKey">identityTokenKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.kubernetesCaCert">kubernetesCaCert</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.kubernetesHost">kubernetesHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.listingVisibility">listingVisibility</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.local">local</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.maxLeaseTtlSeconds">maxLeaseTtlSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.options">options</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.passthroughRequestHeaders">passthroughRequestHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.pluginVersion">pluginVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.sealWrap">sealWrap</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.serviceAccountJwt">serviceAccountJwt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.serviceAccountJwtWo">serviceAccountJwtWo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.serviceAccountJwtWoVersion">serviceAccountJwtWoVersion</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessor`<sup>Required</sup> <a name="accessor" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.accessor"></a>

```java
public java.lang.String getAccessor();
```

- *Type:* java.lang.String

---

##### `allowedManagedKeysInput`<sup>Optional</sup> <a name="allowedManagedKeysInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.allowedManagedKeysInput"></a>

```java
public java.util.List<java.lang.String> getAllowedManagedKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedResponseHeadersInput`<sup>Optional</sup> <a name="allowedResponseHeadersInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.allowedResponseHeadersInput"></a>

```java
public java.util.List<java.lang.String> getAllowedResponseHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `auditNonHmacRequestKeysInput`<sup>Optional</sup> <a name="auditNonHmacRequestKeysInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.auditNonHmacRequestKeysInput"></a>

```java
public java.util.List<java.lang.String> getAuditNonHmacRequestKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `auditNonHmacResponseKeysInput`<sup>Optional</sup> <a name="auditNonHmacResponseKeysInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.auditNonHmacResponseKeysInput"></a>

```java
public java.util.List<java.lang.String> getAuditNonHmacResponseKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultLeaseTtlSecondsInput`<sup>Optional</sup> <a name="defaultLeaseTtlSecondsInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.defaultLeaseTtlSecondsInput"></a>

```java
public java.lang.Number getDefaultLeaseTtlSecondsInput();
```

- *Type:* java.lang.Number

---

##### `delegatedAuthAccessorsInput`<sup>Optional</sup> <a name="delegatedAuthAccessorsInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.delegatedAuthAccessorsInput"></a>

```java
public java.util.List<java.lang.String> getDelegatedAuthAccessorsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disableLocalCaJwtInput`<sup>Optional</sup> <a name="disableLocalCaJwtInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.disableLocalCaJwtInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableLocalCaJwtInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `externalEntropyAccessInput`<sup>Optional</sup> <a name="externalEntropyAccessInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.externalEntropyAccessInput"></a>

```java
public java.lang.Boolean|IResolvable getExternalEntropyAccessInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `forceNoCacheInput`<sup>Optional</sup> <a name="forceNoCacheInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.forceNoCacheInput"></a>

```java
public java.lang.Boolean|IResolvable getForceNoCacheInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `identityTokenKeyInput`<sup>Optional</sup> <a name="identityTokenKeyInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.identityTokenKeyInput"></a>

```java
public java.lang.String getIdentityTokenKeyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kubernetesCaCertInput`<sup>Optional</sup> <a name="kubernetesCaCertInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.kubernetesCaCertInput"></a>

```java
public java.lang.String getKubernetesCaCertInput();
```

- *Type:* java.lang.String

---

##### `kubernetesHostInput`<sup>Optional</sup> <a name="kubernetesHostInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.kubernetesHostInput"></a>

```java
public java.lang.String getKubernetesHostInput();
```

- *Type:* java.lang.String

---

##### `listingVisibilityInput`<sup>Optional</sup> <a name="listingVisibilityInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.listingVisibilityInput"></a>

```java
public java.lang.String getListingVisibilityInput();
```

- *Type:* java.lang.String

---

##### `localInput`<sup>Optional</sup> <a name="localInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.localInput"></a>

```java
public java.lang.Boolean|IResolvable getLocalInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxLeaseTtlSecondsInput`<sup>Optional</sup> <a name="maxLeaseTtlSecondsInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.maxLeaseTtlSecondsInput"></a>

```java
public java.lang.Number getMaxLeaseTtlSecondsInput();
```

- *Type:* java.lang.Number

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.optionsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOptionsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `passthroughRequestHeadersInput`<sup>Optional</sup> <a name="passthroughRequestHeadersInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.passthroughRequestHeadersInput"></a>

```java
public java.util.List<java.lang.String> getPassthroughRequestHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `pluginVersionInput`<sup>Optional</sup> <a name="pluginVersionInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.pluginVersionInput"></a>

```java
public java.lang.String getPluginVersionInput();
```

- *Type:* java.lang.String

---

##### `sealWrapInput`<sup>Optional</sup> <a name="sealWrapInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.sealWrapInput"></a>

```java
public java.lang.Boolean|IResolvable getSealWrapInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `serviceAccountJwtInput`<sup>Optional</sup> <a name="serviceAccountJwtInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.serviceAccountJwtInput"></a>

```java
public java.lang.String getServiceAccountJwtInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountJwtWoInput`<sup>Optional</sup> <a name="serviceAccountJwtWoInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.serviceAccountJwtWoInput"></a>

```java
public java.lang.String getServiceAccountJwtWoInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountJwtWoVersionInput`<sup>Optional</sup> <a name="serviceAccountJwtWoVersionInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.serviceAccountJwtWoVersionInput"></a>

```java
public java.lang.Number getServiceAccountJwtWoVersionInput();
```

- *Type:* java.lang.Number

---

##### `allowedManagedKeys`<sup>Required</sup> <a name="allowedManagedKeys" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.allowedManagedKeys"></a>

```java
public java.util.List<java.lang.String> getAllowedManagedKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedResponseHeaders`<sup>Required</sup> <a name="allowedResponseHeaders" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.allowedResponseHeaders"></a>

```java
public java.util.List<java.lang.String> getAllowedResponseHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `auditNonHmacRequestKeys`<sup>Required</sup> <a name="auditNonHmacRequestKeys" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.auditNonHmacRequestKeys"></a>

```java
public java.util.List<java.lang.String> getAuditNonHmacRequestKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `auditNonHmacResponseKeys`<sup>Required</sup> <a name="auditNonHmacResponseKeys" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.auditNonHmacResponseKeys"></a>

```java
public java.util.List<java.lang.String> getAuditNonHmacResponseKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultLeaseTtlSeconds`<sup>Required</sup> <a name="defaultLeaseTtlSeconds" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.defaultLeaseTtlSeconds"></a>

```java
public java.lang.Number getDefaultLeaseTtlSeconds();
```

- *Type:* java.lang.Number

---

##### `delegatedAuthAccessors`<sup>Required</sup> <a name="delegatedAuthAccessors" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.delegatedAuthAccessors"></a>

```java
public java.util.List<java.lang.String> getDelegatedAuthAccessors();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disableLocalCaJwt`<sup>Required</sup> <a name="disableLocalCaJwt" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.disableLocalCaJwt"></a>

```java
public java.lang.Boolean|IResolvable getDisableLocalCaJwt();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `externalEntropyAccess`<sup>Required</sup> <a name="externalEntropyAccess" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.externalEntropyAccess"></a>

```java
public java.lang.Boolean|IResolvable getExternalEntropyAccess();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `forceNoCache`<sup>Required</sup> <a name="forceNoCache" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.forceNoCache"></a>

```java
public java.lang.Boolean|IResolvable getForceNoCache();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identityTokenKey`<sup>Required</sup> <a name="identityTokenKey" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.identityTokenKey"></a>

```java
public java.lang.String getIdentityTokenKey();
```

- *Type:* java.lang.String

---

##### `kubernetesCaCert`<sup>Required</sup> <a name="kubernetesCaCert" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.kubernetesCaCert"></a>

```java
public java.lang.String getKubernetesCaCert();
```

- *Type:* java.lang.String

---

##### `kubernetesHost`<sup>Required</sup> <a name="kubernetesHost" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.kubernetesHost"></a>

```java
public java.lang.String getKubernetesHost();
```

- *Type:* java.lang.String

---

##### `listingVisibility`<sup>Required</sup> <a name="listingVisibility" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.listingVisibility"></a>

```java
public java.lang.String getListingVisibility();
```

- *Type:* java.lang.String

---

##### `local`<sup>Required</sup> <a name="local" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.local"></a>

```java
public java.lang.Boolean|IResolvable getLocal();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxLeaseTtlSeconds`<sup>Required</sup> <a name="maxLeaseTtlSeconds" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.maxLeaseTtlSeconds"></a>

```java
public java.lang.Number getMaxLeaseTtlSeconds();
```

- *Type:* java.lang.Number

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.options"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `passthroughRequestHeaders`<sup>Required</sup> <a name="passthroughRequestHeaders" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.passthroughRequestHeaders"></a>

```java
public java.util.List<java.lang.String> getPassthroughRequestHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `pluginVersion`<sup>Required</sup> <a name="pluginVersion" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.pluginVersion"></a>

```java
public java.lang.String getPluginVersion();
```

- *Type:* java.lang.String

---

##### `sealWrap`<sup>Required</sup> <a name="sealWrap" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.sealWrap"></a>

```java
public java.lang.Boolean|IResolvable getSealWrap();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `serviceAccountJwt`<sup>Required</sup> <a name="serviceAccountJwt" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.serviceAccountJwt"></a>

```java
public java.lang.String getServiceAccountJwt();
```

- *Type:* java.lang.String

---

##### `serviceAccountJwtWo`<sup>Required</sup> <a name="serviceAccountJwtWo" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.serviceAccountJwtWo"></a>

```java
public java.lang.String getServiceAccountJwtWo();
```

- *Type:* java.lang.String

---

##### `serviceAccountJwtWoVersion`<sup>Required</sup> <a name="serviceAccountJwtWoVersion" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.serviceAccountJwtWoVersion"></a>

```java
public java.lang.Number getServiceAccountJwtWoVersion();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesSecretBackendConfig <a name="KubernetesSecretBackendConfig" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.kubernetes_secret_backend.KubernetesSecretBackendConfig;

KubernetesSecretBackendConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .path(java.lang.String)
//  .allowedManagedKeys(java.util.List<java.lang.String>)
//  .allowedResponseHeaders(java.util.List<java.lang.String>)
//  .auditNonHmacRequestKeys(java.util.List<java.lang.String>)
//  .auditNonHmacResponseKeys(java.util.List<java.lang.String>)
//  .defaultLeaseTtlSeconds(java.lang.Number)
//  .delegatedAuthAccessors(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .disableLocalCaJwt(java.lang.Boolean|IResolvable)
//  .externalEntropyAccess(java.lang.Boolean|IResolvable)
//  .forceNoCache(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .identityTokenKey(java.lang.String)
//  .kubernetesCaCert(java.lang.String)
//  .kubernetesHost(java.lang.String)
//  .listingVisibility(java.lang.String)
//  .local(java.lang.Boolean|IResolvable)
//  .maxLeaseTtlSeconds(java.lang.Number)
//  .namespace(java.lang.String)
//  .options(java.util.Map<java.lang.String, java.lang.String>)
//  .passthroughRequestHeaders(java.util.List<java.lang.String>)
//  .pluginVersion(java.lang.String)
//  .sealWrap(java.lang.Boolean|IResolvable)
//  .serviceAccountJwt(java.lang.String)
//  .serviceAccountJwtWo(java.lang.String)
//  .serviceAccountJwtWoVersion(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.path">path</a></code> | <code>java.lang.String</code> | Where the secret backend will be mounted. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.allowedManagedKeys">allowedManagedKeys</a></code> | <code>java.util.List<java.lang.String></code> | List of managed key registry entry names that the mount in question is allowed to access. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.allowedResponseHeaders">allowedResponseHeaders</a></code> | <code>java.util.List<java.lang.String></code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.auditNonHmacRequestKeys">auditNonHmacRequestKeys</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the list of keys that will not be HMAC'd by audit devices in the request data object. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.auditNonHmacResponseKeys">auditNonHmacResponseKeys</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the list of keys that will not be HMAC'd by audit devices in the response data object. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.defaultLeaseTtlSeconds">defaultLeaseTtlSeconds</a></code> | <code>java.lang.Number</code> | Default lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.delegatedAuthAccessors">delegatedAuthAccessors</a></code> | <code>java.util.List<java.lang.String></code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.description">description</a></code> | <code>java.lang.String</code> | Human-friendly description of the mount. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.disableLocalCaJwt">disableLocalCaJwt</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Disable defaulting to the local CA certificate and service account JWT when running in a Kubernetes pod. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.externalEntropyAccess">externalEntropyAccess</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enable the secrets engine to access Vault's external entropy source. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.forceNoCache">forceNoCache</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set to true, disables caching. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kubernetes_secret_backend#id KubernetesSecretBackend#id}. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.identityTokenKey">identityTokenKey</a></code> | <code>java.lang.String</code> | The key to use for signing plugin workload identity tokens. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.kubernetesCaCert">kubernetesCaCert</a></code> | <code>java.lang.String</code> | A PEM-encoded CA certificate used by the secret engine to verify the Kubernetes API server certificate. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.kubernetesHost">kubernetesHost</a></code> | <code>java.lang.String</code> | The Kubernetes API URL to connect to. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.listingVisibility">listingVisibility</a></code> | <code>java.lang.String</code> | Specifies whether to show this mount in the UI-specific listing endpoint. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.local">local</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Local mount flag that can be explicitly set to true to enforce local mount in HA environment. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.maxLeaseTtlSeconds">maxLeaseTtlSeconds</a></code> | <code>java.lang.Number</code> | Maximum possible lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.options">options</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Specifies mount type specific options that are passed to the backend. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.passthroughRequestHeaders">passthroughRequestHeaders</a></code> | <code>java.util.List<java.lang.String></code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.pluginVersion">pluginVersion</a></code> | <code>java.lang.String</code> | Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.sealWrap">sealWrap</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.serviceAccountJwt">serviceAccountJwt</a></code> | <code>java.lang.String</code> | The JSON web token of the service account used by the secrets engine to manage Kubernetes credentials. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.serviceAccountJwtWo">serviceAccountJwtWo</a></code> | <code>java.lang.String</code> | Write-only JSON web token of the service account used by the secrets engine to manage Kubernetes credentials. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.serviceAccountJwtWoVersion">serviceAccountJwtWoVersion</a></code> | <code>java.lang.Number</code> | Version counter for write-only service account JWT. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Where the secret backend will be mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kubernetes_secret_backend#path KubernetesSecretBackend#path}

---

##### `allowedManagedKeys`<sup>Optional</sup> <a name="allowedManagedKeys" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.allowedManagedKeys"></a>

```java
public java.util.List<java.lang.String> getAllowedManagedKeys();
```

- *Type:* java.util.List<java.lang.String>

List of managed key registry entry names that the mount in question is allowed to access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kubernetes_secret_backend#allowed_managed_keys KubernetesSecretBackend#allowed_managed_keys}

---

##### `allowedResponseHeaders`<sup>Optional</sup> <a name="allowedResponseHeaders" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.allowedResponseHeaders"></a>

```java
public java.util.List<java.lang.String> getAllowedResponseHeaders();
```

- *Type:* java.util.List<java.lang.String>

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kubernetes_secret_backend#allowed_response_headers KubernetesSecretBackend#allowed_response_headers}

---

##### `auditNonHmacRequestKeys`<sup>Optional</sup> <a name="auditNonHmacRequestKeys" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.auditNonHmacRequestKeys"></a>

```java
public java.util.List<java.lang.String> getAuditNonHmacRequestKeys();
```

- *Type:* java.util.List<java.lang.String>

Specifies the list of keys that will not be HMAC'd by audit devices in the request data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kubernetes_secret_backend#audit_non_hmac_request_keys KubernetesSecretBackend#audit_non_hmac_request_keys}

---

##### `auditNonHmacResponseKeys`<sup>Optional</sup> <a name="auditNonHmacResponseKeys" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.auditNonHmacResponseKeys"></a>

```java
public java.util.List<java.lang.String> getAuditNonHmacResponseKeys();
```

- *Type:* java.util.List<java.lang.String>

Specifies the list of keys that will not be HMAC'd by audit devices in the response data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kubernetes_secret_backend#audit_non_hmac_response_keys KubernetesSecretBackend#audit_non_hmac_response_keys}

---

##### `defaultLeaseTtlSeconds`<sup>Optional</sup> <a name="defaultLeaseTtlSeconds" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.defaultLeaseTtlSeconds"></a>

```java
public java.lang.Number getDefaultLeaseTtlSeconds();
```

- *Type:* java.lang.Number

Default lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kubernetes_secret_backend#default_lease_ttl_seconds KubernetesSecretBackend#default_lease_ttl_seconds}

---

##### `delegatedAuthAccessors`<sup>Optional</sup> <a name="delegatedAuthAccessors" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.delegatedAuthAccessors"></a>

```java
public java.util.List<java.lang.String> getDelegatedAuthAccessors();
```

- *Type:* java.util.List<java.lang.String>

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kubernetes_secret_backend#delegated_auth_accessors KubernetesSecretBackend#delegated_auth_accessors}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Human-friendly description of the mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kubernetes_secret_backend#description KubernetesSecretBackend#description}

---

##### `disableLocalCaJwt`<sup>Optional</sup> <a name="disableLocalCaJwt" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.disableLocalCaJwt"></a>

```java
public java.lang.Boolean|IResolvable getDisableLocalCaJwt();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Disable defaulting to the local CA certificate and service account JWT when running in a Kubernetes pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kubernetes_secret_backend#disable_local_ca_jwt KubernetesSecretBackend#disable_local_ca_jwt}

---

##### `externalEntropyAccess`<sup>Optional</sup> <a name="externalEntropyAccess" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.externalEntropyAccess"></a>

```java
public java.lang.Boolean|IResolvable getExternalEntropyAccess();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enable the secrets engine to access Vault's external entropy source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kubernetes_secret_backend#external_entropy_access KubernetesSecretBackend#external_entropy_access}

---

##### `forceNoCache`<sup>Optional</sup> <a name="forceNoCache" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.forceNoCache"></a>

```java
public java.lang.Boolean|IResolvable getForceNoCache();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set to true, disables caching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kubernetes_secret_backend#force_no_cache KubernetesSecretBackend#force_no_cache}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kubernetes_secret_backend#id KubernetesSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityTokenKey`<sup>Optional</sup> <a name="identityTokenKey" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.identityTokenKey"></a>

```java
public java.lang.String getIdentityTokenKey();
```

- *Type:* java.lang.String

The key to use for signing plugin workload identity tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kubernetes_secret_backend#identity_token_key KubernetesSecretBackend#identity_token_key}

---

##### `kubernetesCaCert`<sup>Optional</sup> <a name="kubernetesCaCert" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.kubernetesCaCert"></a>

```java
public java.lang.String getKubernetesCaCert();
```

- *Type:* java.lang.String

A PEM-encoded CA certificate used by the secret engine to verify the Kubernetes API server certificate.

Defaults to the local pod’s CA if found, or otherwise the host's root CA set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kubernetes_secret_backend#kubernetes_ca_cert KubernetesSecretBackend#kubernetes_ca_cert}

---

##### `kubernetesHost`<sup>Optional</sup> <a name="kubernetesHost" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.kubernetesHost"></a>

```java
public java.lang.String getKubernetesHost();
```

- *Type:* java.lang.String

The Kubernetes API URL to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kubernetes_secret_backend#kubernetes_host KubernetesSecretBackend#kubernetes_host}

---

##### `listingVisibility`<sup>Optional</sup> <a name="listingVisibility" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.listingVisibility"></a>

```java
public java.lang.String getListingVisibility();
```

- *Type:* java.lang.String

Specifies whether to show this mount in the UI-specific listing endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kubernetes_secret_backend#listing_visibility KubernetesSecretBackend#listing_visibility}

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.local"></a>

```java
public java.lang.Boolean|IResolvable getLocal();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Local mount flag that can be explicitly set to true to enforce local mount in HA environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kubernetes_secret_backend#local KubernetesSecretBackend#local}

---

##### `maxLeaseTtlSeconds`<sup>Optional</sup> <a name="maxLeaseTtlSeconds" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.maxLeaseTtlSeconds"></a>

```java
public java.lang.Number getMaxLeaseTtlSeconds();
```

- *Type:* java.lang.Number

Maximum possible lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kubernetes_secret_backend#max_lease_ttl_seconds KubernetesSecretBackend#max_lease_ttl_seconds}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kubernetes_secret_backend#namespace KubernetesSecretBackend#namespace}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.options"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Specifies mount type specific options that are passed to the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kubernetes_secret_backend#options KubernetesSecretBackend#options}

---

##### `passthroughRequestHeaders`<sup>Optional</sup> <a name="passthroughRequestHeaders" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.passthroughRequestHeaders"></a>

```java
public java.util.List<java.lang.String> getPassthroughRequestHeaders();
```

- *Type:* java.util.List<java.lang.String>

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kubernetes_secret_backend#passthrough_request_headers KubernetesSecretBackend#passthrough_request_headers}

---

##### `pluginVersion`<sup>Optional</sup> <a name="pluginVersion" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.pluginVersion"></a>

```java
public java.lang.String getPluginVersion();
```

- *Type:* java.lang.String

Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kubernetes_secret_backend#plugin_version KubernetesSecretBackend#plugin_version}

---

##### `sealWrap`<sup>Optional</sup> <a name="sealWrap" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.sealWrap"></a>

```java
public java.lang.Boolean|IResolvable getSealWrap();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kubernetes_secret_backend#seal_wrap KubernetesSecretBackend#seal_wrap}

---

##### `serviceAccountJwt`<sup>Optional</sup> <a name="serviceAccountJwt" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.serviceAccountJwt"></a>

```java
public java.lang.String getServiceAccountJwt();
```

- *Type:* java.lang.String

The JSON web token of the service account used by the secrets engine to manage Kubernetes credentials.

Defaults to the local pod’s JWT if found.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kubernetes_secret_backend#service_account_jwt KubernetesSecretBackend#service_account_jwt}

---

##### `serviceAccountJwtWo`<sup>Optional</sup> <a name="serviceAccountJwtWo" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.serviceAccountJwtWo"></a>

```java
public java.lang.String getServiceAccountJwtWo();
```

- *Type:* java.lang.String

Write-only JSON web token of the service account used by the secrets engine to manage Kubernetes credentials.

This value will not be stored in state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kubernetes_secret_backend#service_account_jwt_wo KubernetesSecretBackend#service_account_jwt_wo}

---

##### `serviceAccountJwtWoVersion`<sup>Optional</sup> <a name="serviceAccountJwtWoVersion" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.serviceAccountJwtWoVersion"></a>

```java
public java.lang.Number getServiceAccountJwtWoVersion();
```

- *Type:* java.lang.Number

Version counter for write-only service account JWT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kubernetes_secret_backend#service_account_jwt_wo_version KubernetesSecretBackend#service_account_jwt_wo_version}

---



