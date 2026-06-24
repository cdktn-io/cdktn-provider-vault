# `consulSecretBackend` Submodule <a name="`consulSecretBackend` Submodule" id="@cdktn/provider-vault.consulSecretBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConsulSecretBackend <a name="ConsulSecretBackend" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend vault_consul_secret_backend}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer"></a>

```java
import io.cdktn.providers.vault.consul_secret_backend.ConsulSecretBackend;

ConsulSecretBackend.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .address(java.lang.String)
//  .allowedManagedKeys(java.util.List<java.lang.String>)
//  .allowedResponseHeaders(java.util.List<java.lang.String>)
//  .auditNonHmacRequestKeys(java.util.List<java.lang.String>)
//  .auditNonHmacResponseKeys(java.util.List<java.lang.String>)
//  .bootstrap(java.lang.Boolean|IResolvable)
//  .caCert(java.lang.String)
//  .clientCert(java.lang.String)
//  .clientKey(java.lang.String)
//  .clientKeyWo(java.lang.String)
//  .clientKeyWoVersion(java.lang.Number)
//  .defaultLeaseTtlSeconds(java.lang.Number)
//  .delegatedAuthAccessors(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .disableRemount(java.lang.Boolean|IResolvable)
//  .externalEntropyAccess(java.lang.Boolean|IResolvable)
//  .forceNoCache(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .identityTokenKey(java.lang.String)
//  .listingVisibility(java.lang.String)
//  .local(java.lang.Boolean|IResolvable)
//  .maxLeaseTtlSeconds(java.lang.Number)
//  .namespace(java.lang.String)
//  .options(java.util.Map<java.lang.String, java.lang.String>)
//  .passthroughRequestHeaders(java.util.List<java.lang.String>)
//  .path(java.lang.String)
//  .pluginVersion(java.lang.String)
//  .scheme(java.lang.String)
//  .sealWrap(java.lang.Boolean|IResolvable)
//  .token(java.lang.String)
//  .tokenWo(java.lang.String)
//  .tokenWoVersion(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.address">address</a></code> | <code>java.lang.String</code> | Specifies the address of the Consul instance, provided as "host:port" like "127.0.0.1:8500". |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.allowedManagedKeys">allowedManagedKeys</a></code> | <code>java.util.List<java.lang.String></code> | List of managed key registry entry names that the mount in question is allowed to access. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.allowedResponseHeaders">allowedResponseHeaders</a></code> | <code>java.util.List<java.lang.String></code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.auditNonHmacRequestKeys">auditNonHmacRequestKeys</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the list of keys that will not be HMAC'd by audit devices in the request data object. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.auditNonHmacResponseKeys">auditNonHmacResponseKeys</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the list of keys that will not be HMAC'd by audit devices in the response data object. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.bootstrap">bootstrap</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Denotes a backend resource that is used to bootstrap the Consul ACL system. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.caCert">caCert</a></code> | <code>java.lang.String</code> | CA certificate to use when verifying Consul server certificate, must be x509 PEM encoded. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.clientCert">clientCert</a></code> | <code>java.lang.String</code> | Client certificate used for Consul's TLS communication, must be x509 PEM encoded and if this is set you need to also set client_key. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.clientKey">clientKey</a></code> | <code>java.lang.String</code> | Client key used for Consul's TLS communication, must be x509 PEM encoded and if this is set you need to also set client_cert. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.clientKeyWo">clientKeyWo</a></code> | <code>java.lang.String</code> | Client key used for Consul's TLS communication, must be x509 PEM encoded. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.clientKeyWoVersion">clientKeyWoVersion</a></code> | <code>java.lang.Number</code> | Version counter for the write-only client key. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.defaultLeaseTtlSeconds">defaultLeaseTtlSeconds</a></code> | <code>java.lang.Number</code> | Default lease duration for secrets in seconds. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.delegatedAuthAccessors">delegatedAuthAccessors</a></code> | <code>java.util.List<java.lang.String></code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.disableRemount">disableRemount</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.externalEntropyAccess">externalEntropyAccess</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enable the secrets engine to access Vault's external entropy source. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.forceNoCache">forceNoCache</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set to true, disables caching. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#id ConsulSecretBackend#id}. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.identityTokenKey">identityTokenKey</a></code> | <code>java.lang.String</code> | The key to use for signing plugin workload identity tokens. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.listingVisibility">listingVisibility</a></code> | <code>java.lang.String</code> | Specifies whether to show this mount in the UI-specific listing endpoint. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.local">local</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies if the secret backend is local only. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.maxLeaseTtlSeconds">maxLeaseTtlSeconds</a></code> | <code>java.lang.Number</code> | Maximum possible lease duration for secrets in seconds. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.options">options</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Specifies mount type specific options that are passed to the backend. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.passthroughRequestHeaders">passthroughRequestHeaders</a></code> | <code>java.util.List<java.lang.String></code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.path">path</a></code> | <code>java.lang.String</code> | Unique name of the Vault Consul mount to configure. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.pluginVersion">pluginVersion</a></code> | <code>java.lang.String</code> | Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.scheme">scheme</a></code> | <code>java.lang.String</code> | Specifies the URL scheme to use. Defaults to "http". |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.sealWrap">sealWrap</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.token">token</a></code> | <code>java.lang.String</code> | Specifies the Consul token to use when managing or issuing new tokens. Mutually exclusive with 'token_wo'. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.tokenWo">tokenWo</a></code> | <code>java.lang.String</code> | Specifies the Consul token to use when managing or issuing new tokens. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.tokenWoVersion">tokenWoVersion</a></code> | <code>java.lang.Number</code> | Version counter for the write-only token. Increment this value to trigger rotation of the token. Required when using 'token_wo'. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.address"></a>

- *Type:* java.lang.String

Specifies the address of the Consul instance, provided as "host:port" like "127.0.0.1:8500".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#address ConsulSecretBackend#address}

---

##### `allowedManagedKeys`<sup>Optional</sup> <a name="allowedManagedKeys" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.allowedManagedKeys"></a>

- *Type:* java.util.List<java.lang.String>

List of managed key registry entry names that the mount in question is allowed to access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#allowed_managed_keys ConsulSecretBackend#allowed_managed_keys}

---

##### `allowedResponseHeaders`<sup>Optional</sup> <a name="allowedResponseHeaders" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.allowedResponseHeaders"></a>

- *Type:* java.util.List<java.lang.String>

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#allowed_response_headers ConsulSecretBackend#allowed_response_headers}

---

##### `auditNonHmacRequestKeys`<sup>Optional</sup> <a name="auditNonHmacRequestKeys" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.auditNonHmacRequestKeys"></a>

- *Type:* java.util.List<java.lang.String>

Specifies the list of keys that will not be HMAC'd by audit devices in the request data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#audit_non_hmac_request_keys ConsulSecretBackend#audit_non_hmac_request_keys}

---

##### `auditNonHmacResponseKeys`<sup>Optional</sup> <a name="auditNonHmacResponseKeys" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.auditNonHmacResponseKeys"></a>

- *Type:* java.util.List<java.lang.String>

Specifies the list of keys that will not be HMAC'd by audit devices in the response data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#audit_non_hmac_response_keys ConsulSecretBackend#audit_non_hmac_response_keys}

---

##### `bootstrap`<sup>Optional</sup> <a name="bootstrap" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.bootstrap"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Denotes a backend resource that is used to bootstrap the Consul ACL system.

Only one resource may be used to bootstrap.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#bootstrap ConsulSecretBackend#bootstrap}

---

##### `caCert`<sup>Optional</sup> <a name="caCert" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.caCert"></a>

- *Type:* java.lang.String

CA certificate to use when verifying Consul server certificate, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#ca_cert ConsulSecretBackend#ca_cert}

---

##### `clientCert`<sup>Optional</sup> <a name="clientCert" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.clientCert"></a>

- *Type:* java.lang.String

Client certificate used for Consul's TLS communication, must be x509 PEM encoded and if this is set you need to also set client_key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#client_cert ConsulSecretBackend#client_cert}

---

##### `clientKey`<sup>Optional</sup> <a name="clientKey" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.clientKey"></a>

- *Type:* java.lang.String

Client key used for Consul's TLS communication, must be x509 PEM encoded and if this is set you need to also set client_cert.

Mutually exclusive with 'client_key_wo'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#client_key ConsulSecretBackend#client_key}

---

##### `clientKeyWo`<sup>Optional</sup> <a name="clientKeyWo" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.clientKeyWo"></a>

- *Type:* java.lang.String

Client key used for Consul's TLS communication, must be x509 PEM encoded.

This field is write-only and will never be stored in state. Mutually exclusive with 'client_key'. Requires 'client_key_wo_version' to trigger updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#client_key_wo ConsulSecretBackend#client_key_wo}

---

##### `clientKeyWoVersion`<sup>Optional</sup> <a name="clientKeyWoVersion" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.clientKeyWoVersion"></a>

- *Type:* java.lang.Number

Version counter for the write-only client key.

Increment this value to trigger rotation of the client key. Required when using 'client_key_wo'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#client_key_wo_version ConsulSecretBackend#client_key_wo_version}

---

##### `defaultLeaseTtlSeconds`<sup>Optional</sup> <a name="defaultLeaseTtlSeconds" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.defaultLeaseTtlSeconds"></a>

- *Type:* java.lang.Number

Default lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#default_lease_ttl_seconds ConsulSecretBackend#default_lease_ttl_seconds}

---

##### `delegatedAuthAccessors`<sup>Optional</sup> <a name="delegatedAuthAccessors" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.delegatedAuthAccessors"></a>

- *Type:* java.util.List<java.lang.String>

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#delegated_auth_accessors ConsulSecretBackend#delegated_auth_accessors}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#description ConsulSecretBackend#description}

---

##### `disableRemount`<sup>Optional</sup> <a name="disableRemount" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.disableRemount"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#disable_remount ConsulSecretBackend#disable_remount}

---

##### `externalEntropyAccess`<sup>Optional</sup> <a name="externalEntropyAccess" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.externalEntropyAccess"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enable the secrets engine to access Vault's external entropy source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#external_entropy_access ConsulSecretBackend#external_entropy_access}

---

##### `forceNoCache`<sup>Optional</sup> <a name="forceNoCache" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.forceNoCache"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set to true, disables caching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#force_no_cache ConsulSecretBackend#force_no_cache}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#id ConsulSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityTokenKey`<sup>Optional</sup> <a name="identityTokenKey" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.identityTokenKey"></a>

- *Type:* java.lang.String

The key to use for signing plugin workload identity tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#identity_token_key ConsulSecretBackend#identity_token_key}

---

##### `listingVisibility`<sup>Optional</sup> <a name="listingVisibility" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.listingVisibility"></a>

- *Type:* java.lang.String

Specifies whether to show this mount in the UI-specific listing endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#listing_visibility ConsulSecretBackend#listing_visibility}

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.local"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies if the secret backend is local only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#local ConsulSecretBackend#local}

---

##### `maxLeaseTtlSeconds`<sup>Optional</sup> <a name="maxLeaseTtlSeconds" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.maxLeaseTtlSeconds"></a>

- *Type:* java.lang.Number

Maximum possible lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#max_lease_ttl_seconds ConsulSecretBackend#max_lease_ttl_seconds}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#namespace ConsulSecretBackend#namespace}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.options"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Specifies mount type specific options that are passed to the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#options ConsulSecretBackend#options}

---

##### `passthroughRequestHeaders`<sup>Optional</sup> <a name="passthroughRequestHeaders" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.passthroughRequestHeaders"></a>

- *Type:* java.util.List<java.lang.String>

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#passthrough_request_headers ConsulSecretBackend#passthrough_request_headers}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.path"></a>

- *Type:* java.lang.String

Unique name of the Vault Consul mount to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#path ConsulSecretBackend#path}

---

##### `pluginVersion`<sup>Optional</sup> <a name="pluginVersion" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.pluginVersion"></a>

- *Type:* java.lang.String

Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#plugin_version ConsulSecretBackend#plugin_version}

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.scheme"></a>

- *Type:* java.lang.String

Specifies the URL scheme to use. Defaults to "http".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#scheme ConsulSecretBackend#scheme}

---

##### `sealWrap`<sup>Optional</sup> <a name="sealWrap" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.sealWrap"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#seal_wrap ConsulSecretBackend#seal_wrap}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.token"></a>

- *Type:* java.lang.String

Specifies the Consul token to use when managing or issuing new tokens. Mutually exclusive with 'token_wo'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#token ConsulSecretBackend#token}

---

##### `tokenWo`<sup>Optional</sup> <a name="tokenWo" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.tokenWo"></a>

- *Type:* java.lang.String

Specifies the Consul token to use when managing or issuing new tokens.

This field is write-only and will never be stored in state. Mutually exclusive with 'token'. Requires 'token_wo_version' to trigger updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#token_wo ConsulSecretBackend#token_wo}

---

##### `tokenWoVersion`<sup>Optional</sup> <a name="tokenWoVersion" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.tokenWoVersion"></a>

- *Type:* java.lang.Number

Version counter for the write-only token. Increment this value to trigger rotation of the token. Required when using 'token_wo'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#token_wo_version ConsulSecretBackend#token_wo_version}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetAllowedManagedKeys">resetAllowedManagedKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetAllowedResponseHeaders">resetAllowedResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetAuditNonHmacRequestKeys">resetAuditNonHmacRequestKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetAuditNonHmacResponseKeys">resetAuditNonHmacResponseKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetBootstrap">resetBootstrap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetCaCert">resetCaCert</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetClientCert">resetClientCert</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetClientKey">resetClientKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetClientKeyWo">resetClientKeyWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetClientKeyWoVersion">resetClientKeyWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetDefaultLeaseTtlSeconds">resetDefaultLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetDelegatedAuthAccessors">resetDelegatedAuthAccessors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetDisableRemount">resetDisableRemount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetExternalEntropyAccess">resetExternalEntropyAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetForceNoCache">resetForceNoCache</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetIdentityTokenKey">resetIdentityTokenKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetListingVisibility">resetListingVisibility</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetLocal">resetLocal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetMaxLeaseTtlSeconds">resetMaxLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetPassthroughRequestHeaders">resetPassthroughRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetPluginVersion">resetPluginVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetScheme">resetScheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetSealWrap">resetSealWrap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetToken">resetToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetTokenWo">resetTokenWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetTokenWoVersion">resetTokenWoVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAllowedManagedKeys` <a name="resetAllowedManagedKeys" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetAllowedManagedKeys"></a>

```java
public void resetAllowedManagedKeys()
```

##### `resetAllowedResponseHeaders` <a name="resetAllowedResponseHeaders" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetAllowedResponseHeaders"></a>

```java
public void resetAllowedResponseHeaders()
```

##### `resetAuditNonHmacRequestKeys` <a name="resetAuditNonHmacRequestKeys" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetAuditNonHmacRequestKeys"></a>

```java
public void resetAuditNonHmacRequestKeys()
```

##### `resetAuditNonHmacResponseKeys` <a name="resetAuditNonHmacResponseKeys" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetAuditNonHmacResponseKeys"></a>

```java
public void resetAuditNonHmacResponseKeys()
```

##### `resetBootstrap` <a name="resetBootstrap" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetBootstrap"></a>

```java
public void resetBootstrap()
```

##### `resetCaCert` <a name="resetCaCert" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetCaCert"></a>

```java
public void resetCaCert()
```

##### `resetClientCert` <a name="resetClientCert" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetClientCert"></a>

```java
public void resetClientCert()
```

##### `resetClientKey` <a name="resetClientKey" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetClientKey"></a>

```java
public void resetClientKey()
```

##### `resetClientKeyWo` <a name="resetClientKeyWo" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetClientKeyWo"></a>

```java
public void resetClientKeyWo()
```

##### `resetClientKeyWoVersion` <a name="resetClientKeyWoVersion" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetClientKeyWoVersion"></a>

```java
public void resetClientKeyWoVersion()
```

##### `resetDefaultLeaseTtlSeconds` <a name="resetDefaultLeaseTtlSeconds" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetDefaultLeaseTtlSeconds"></a>

```java
public void resetDefaultLeaseTtlSeconds()
```

##### `resetDelegatedAuthAccessors` <a name="resetDelegatedAuthAccessors" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetDelegatedAuthAccessors"></a>

```java
public void resetDelegatedAuthAccessors()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisableRemount` <a name="resetDisableRemount" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetDisableRemount"></a>

```java
public void resetDisableRemount()
```

##### `resetExternalEntropyAccess` <a name="resetExternalEntropyAccess" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetExternalEntropyAccess"></a>

```java
public void resetExternalEntropyAccess()
```

##### `resetForceNoCache` <a name="resetForceNoCache" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetForceNoCache"></a>

```java
public void resetForceNoCache()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetId"></a>

```java
public void resetId()
```

##### `resetIdentityTokenKey` <a name="resetIdentityTokenKey" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetIdentityTokenKey"></a>

```java
public void resetIdentityTokenKey()
```

##### `resetListingVisibility` <a name="resetListingVisibility" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetListingVisibility"></a>

```java
public void resetListingVisibility()
```

##### `resetLocal` <a name="resetLocal" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetLocal"></a>

```java
public void resetLocal()
```

##### `resetMaxLeaseTtlSeconds` <a name="resetMaxLeaseTtlSeconds" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetMaxLeaseTtlSeconds"></a>

```java
public void resetMaxLeaseTtlSeconds()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetOptions` <a name="resetOptions" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetOptions"></a>

```java
public void resetOptions()
```

##### `resetPassthroughRequestHeaders` <a name="resetPassthroughRequestHeaders" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetPassthroughRequestHeaders"></a>

```java
public void resetPassthroughRequestHeaders()
```

##### `resetPath` <a name="resetPath" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetPath"></a>

```java
public void resetPath()
```

##### `resetPluginVersion` <a name="resetPluginVersion" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetPluginVersion"></a>

```java
public void resetPluginVersion()
```

##### `resetScheme` <a name="resetScheme" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetScheme"></a>

```java
public void resetScheme()
```

##### `resetSealWrap` <a name="resetSealWrap" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetSealWrap"></a>

```java
public void resetSealWrap()
```

##### `resetToken` <a name="resetToken" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetToken"></a>

```java
public void resetToken()
```

##### `resetTokenWo` <a name="resetTokenWo" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetTokenWo"></a>

```java
public void resetTokenWo()
```

##### `resetTokenWoVersion` <a name="resetTokenWoVersion" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.resetTokenWoVersion"></a>

```java
public void resetTokenWoVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ConsulSecretBackend resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.isConstruct"></a>

```java
import io.cdktn.providers.vault.consul_secret_backend.ConsulSecretBackend;

ConsulSecretBackend.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.consul_secret_backend.ConsulSecretBackend;

ConsulSecretBackend.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.isTerraformResource"></a>

```java
import io.cdktn.providers.vault.consul_secret_backend.ConsulSecretBackend;

ConsulSecretBackend.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.consul_secret_backend.ConsulSecretBackend;

ConsulSecretBackend.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ConsulSecretBackend.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ConsulSecretBackend resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ConsulSecretBackend to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ConsulSecretBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ConsulSecretBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.accessor">accessor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.allowedManagedKeysInput">allowedManagedKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.allowedResponseHeadersInput">allowedResponseHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.auditNonHmacRequestKeysInput">auditNonHmacRequestKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.auditNonHmacResponseKeysInput">auditNonHmacResponseKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.bootstrapInput">bootstrapInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.caCertInput">caCertInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.clientCertInput">clientCertInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.clientKeyInput">clientKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.clientKeyWoInput">clientKeyWoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.clientKeyWoVersionInput">clientKeyWoVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.defaultLeaseTtlSecondsInput">defaultLeaseTtlSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.delegatedAuthAccessorsInput">delegatedAuthAccessorsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.disableRemountInput">disableRemountInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.externalEntropyAccessInput">externalEntropyAccessInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.forceNoCacheInput">forceNoCacheInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.identityTokenKeyInput">identityTokenKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.listingVisibilityInput">listingVisibilityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.localInput">localInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.maxLeaseTtlSecondsInput">maxLeaseTtlSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.optionsInput">optionsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.passthroughRequestHeadersInput">passthroughRequestHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.pluginVersionInput">pluginVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.schemeInput">schemeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.sealWrapInput">sealWrapInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.tokenInput">tokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.tokenWoInput">tokenWoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.tokenWoVersionInput">tokenWoVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.allowedManagedKeys">allowedManagedKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.allowedResponseHeaders">allowedResponseHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.auditNonHmacRequestKeys">auditNonHmacRequestKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.auditNonHmacResponseKeys">auditNonHmacResponseKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.bootstrap">bootstrap</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.caCert">caCert</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.clientCert">clientCert</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.clientKey">clientKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.clientKeyWo">clientKeyWo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.clientKeyWoVersion">clientKeyWoVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.defaultLeaseTtlSeconds">defaultLeaseTtlSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.delegatedAuthAccessors">delegatedAuthAccessors</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.disableRemount">disableRemount</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.externalEntropyAccess">externalEntropyAccess</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.forceNoCache">forceNoCache</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.identityTokenKey">identityTokenKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.listingVisibility">listingVisibility</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.local">local</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.maxLeaseTtlSeconds">maxLeaseTtlSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.options">options</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.passthroughRequestHeaders">passthroughRequestHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.pluginVersion">pluginVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.scheme">scheme</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.sealWrap">sealWrap</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.tokenWo">tokenWo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.tokenWoVersion">tokenWoVersion</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessor`<sup>Required</sup> <a name="accessor" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.accessor"></a>

```java
public java.lang.String getAccessor();
```

- *Type:* java.lang.String

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `allowedManagedKeysInput`<sup>Optional</sup> <a name="allowedManagedKeysInput" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.allowedManagedKeysInput"></a>

```java
public java.util.List<java.lang.String> getAllowedManagedKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedResponseHeadersInput`<sup>Optional</sup> <a name="allowedResponseHeadersInput" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.allowedResponseHeadersInput"></a>

```java
public java.util.List<java.lang.String> getAllowedResponseHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `auditNonHmacRequestKeysInput`<sup>Optional</sup> <a name="auditNonHmacRequestKeysInput" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.auditNonHmacRequestKeysInput"></a>

```java
public java.util.List<java.lang.String> getAuditNonHmacRequestKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `auditNonHmacResponseKeysInput`<sup>Optional</sup> <a name="auditNonHmacResponseKeysInput" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.auditNonHmacResponseKeysInput"></a>

```java
public java.util.List<java.lang.String> getAuditNonHmacResponseKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `bootstrapInput`<sup>Optional</sup> <a name="bootstrapInput" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.bootstrapInput"></a>

```java
public java.lang.Boolean|IResolvable getBootstrapInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `caCertInput`<sup>Optional</sup> <a name="caCertInput" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.caCertInput"></a>

```java
public java.lang.String getCaCertInput();
```

- *Type:* java.lang.String

---

##### `clientCertInput`<sup>Optional</sup> <a name="clientCertInput" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.clientCertInput"></a>

```java
public java.lang.String getClientCertInput();
```

- *Type:* java.lang.String

---

##### `clientKeyInput`<sup>Optional</sup> <a name="clientKeyInput" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.clientKeyInput"></a>

```java
public java.lang.String getClientKeyInput();
```

- *Type:* java.lang.String

---

##### `clientKeyWoInput`<sup>Optional</sup> <a name="clientKeyWoInput" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.clientKeyWoInput"></a>

```java
public java.lang.String getClientKeyWoInput();
```

- *Type:* java.lang.String

---

##### `clientKeyWoVersionInput`<sup>Optional</sup> <a name="clientKeyWoVersionInput" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.clientKeyWoVersionInput"></a>

```java
public java.lang.Number getClientKeyWoVersionInput();
```

- *Type:* java.lang.Number

---

##### `defaultLeaseTtlSecondsInput`<sup>Optional</sup> <a name="defaultLeaseTtlSecondsInput" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.defaultLeaseTtlSecondsInput"></a>

```java
public java.lang.Number getDefaultLeaseTtlSecondsInput();
```

- *Type:* java.lang.Number

---

##### `delegatedAuthAccessorsInput`<sup>Optional</sup> <a name="delegatedAuthAccessorsInput" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.delegatedAuthAccessorsInput"></a>

```java
public java.util.List<java.lang.String> getDelegatedAuthAccessorsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disableRemountInput`<sup>Optional</sup> <a name="disableRemountInput" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.disableRemountInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableRemountInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `externalEntropyAccessInput`<sup>Optional</sup> <a name="externalEntropyAccessInput" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.externalEntropyAccessInput"></a>

```java
public java.lang.Boolean|IResolvable getExternalEntropyAccessInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `forceNoCacheInput`<sup>Optional</sup> <a name="forceNoCacheInput" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.forceNoCacheInput"></a>

```java
public java.lang.Boolean|IResolvable getForceNoCacheInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `identityTokenKeyInput`<sup>Optional</sup> <a name="identityTokenKeyInput" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.identityTokenKeyInput"></a>

```java
public java.lang.String getIdentityTokenKeyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `listingVisibilityInput`<sup>Optional</sup> <a name="listingVisibilityInput" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.listingVisibilityInput"></a>

```java
public java.lang.String getListingVisibilityInput();
```

- *Type:* java.lang.String

---

##### `localInput`<sup>Optional</sup> <a name="localInput" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.localInput"></a>

```java
public java.lang.Boolean|IResolvable getLocalInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxLeaseTtlSecondsInput`<sup>Optional</sup> <a name="maxLeaseTtlSecondsInput" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.maxLeaseTtlSecondsInput"></a>

```java
public java.lang.Number getMaxLeaseTtlSecondsInput();
```

- *Type:* java.lang.Number

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.optionsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOptionsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `passthroughRequestHeadersInput`<sup>Optional</sup> <a name="passthroughRequestHeadersInput" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.passthroughRequestHeadersInput"></a>

```java
public java.util.List<java.lang.String> getPassthroughRequestHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `pluginVersionInput`<sup>Optional</sup> <a name="pluginVersionInput" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.pluginVersionInput"></a>

```java
public java.lang.String getPluginVersionInput();
```

- *Type:* java.lang.String

---

##### `schemeInput`<sup>Optional</sup> <a name="schemeInput" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.schemeInput"></a>

```java
public java.lang.String getSchemeInput();
```

- *Type:* java.lang.String

---

##### `sealWrapInput`<sup>Optional</sup> <a name="sealWrapInput" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.sealWrapInput"></a>

```java
public java.lang.Boolean|IResolvable getSealWrapInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.tokenInput"></a>

```java
public java.lang.String getTokenInput();
```

- *Type:* java.lang.String

---

##### `tokenWoInput`<sup>Optional</sup> <a name="tokenWoInput" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.tokenWoInput"></a>

```java
public java.lang.String getTokenWoInput();
```

- *Type:* java.lang.String

---

##### `tokenWoVersionInput`<sup>Optional</sup> <a name="tokenWoVersionInput" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.tokenWoVersionInput"></a>

```java
public java.lang.Number getTokenWoVersionInput();
```

- *Type:* java.lang.Number

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `allowedManagedKeys`<sup>Required</sup> <a name="allowedManagedKeys" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.allowedManagedKeys"></a>

```java
public java.util.List<java.lang.String> getAllowedManagedKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedResponseHeaders`<sup>Required</sup> <a name="allowedResponseHeaders" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.allowedResponseHeaders"></a>

```java
public java.util.List<java.lang.String> getAllowedResponseHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `auditNonHmacRequestKeys`<sup>Required</sup> <a name="auditNonHmacRequestKeys" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.auditNonHmacRequestKeys"></a>

```java
public java.util.List<java.lang.String> getAuditNonHmacRequestKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `auditNonHmacResponseKeys`<sup>Required</sup> <a name="auditNonHmacResponseKeys" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.auditNonHmacResponseKeys"></a>

```java
public java.util.List<java.lang.String> getAuditNonHmacResponseKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `bootstrap`<sup>Required</sup> <a name="bootstrap" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.bootstrap"></a>

```java
public java.lang.Boolean|IResolvable getBootstrap();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `caCert`<sup>Required</sup> <a name="caCert" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.caCert"></a>

```java
public java.lang.String getCaCert();
```

- *Type:* java.lang.String

---

##### `clientCert`<sup>Required</sup> <a name="clientCert" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.clientCert"></a>

```java
public java.lang.String getClientCert();
```

- *Type:* java.lang.String

---

##### `clientKey`<sup>Required</sup> <a name="clientKey" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.clientKey"></a>

```java
public java.lang.String getClientKey();
```

- *Type:* java.lang.String

---

##### `clientKeyWo`<sup>Required</sup> <a name="clientKeyWo" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.clientKeyWo"></a>

```java
public java.lang.String getClientKeyWo();
```

- *Type:* java.lang.String

---

##### `clientKeyWoVersion`<sup>Required</sup> <a name="clientKeyWoVersion" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.clientKeyWoVersion"></a>

```java
public java.lang.Number getClientKeyWoVersion();
```

- *Type:* java.lang.Number

---

##### `defaultLeaseTtlSeconds`<sup>Required</sup> <a name="defaultLeaseTtlSeconds" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.defaultLeaseTtlSeconds"></a>

```java
public java.lang.Number getDefaultLeaseTtlSeconds();
```

- *Type:* java.lang.Number

---

##### `delegatedAuthAccessors`<sup>Required</sup> <a name="delegatedAuthAccessors" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.delegatedAuthAccessors"></a>

```java
public java.util.List<java.lang.String> getDelegatedAuthAccessors();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disableRemount`<sup>Required</sup> <a name="disableRemount" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.disableRemount"></a>

```java
public java.lang.Boolean|IResolvable getDisableRemount();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `externalEntropyAccess`<sup>Required</sup> <a name="externalEntropyAccess" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.externalEntropyAccess"></a>

```java
public java.lang.Boolean|IResolvable getExternalEntropyAccess();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `forceNoCache`<sup>Required</sup> <a name="forceNoCache" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.forceNoCache"></a>

```java
public java.lang.Boolean|IResolvable getForceNoCache();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identityTokenKey`<sup>Required</sup> <a name="identityTokenKey" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.identityTokenKey"></a>

```java
public java.lang.String getIdentityTokenKey();
```

- *Type:* java.lang.String

---

##### `listingVisibility`<sup>Required</sup> <a name="listingVisibility" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.listingVisibility"></a>

```java
public java.lang.String getListingVisibility();
```

- *Type:* java.lang.String

---

##### `local`<sup>Required</sup> <a name="local" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.local"></a>

```java
public java.lang.Boolean|IResolvable getLocal();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxLeaseTtlSeconds`<sup>Required</sup> <a name="maxLeaseTtlSeconds" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.maxLeaseTtlSeconds"></a>

```java
public java.lang.Number getMaxLeaseTtlSeconds();
```

- *Type:* java.lang.Number

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.options"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `passthroughRequestHeaders`<sup>Required</sup> <a name="passthroughRequestHeaders" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.passthroughRequestHeaders"></a>

```java
public java.util.List<java.lang.String> getPassthroughRequestHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `pluginVersion`<sup>Required</sup> <a name="pluginVersion" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.pluginVersion"></a>

```java
public java.lang.String getPluginVersion();
```

- *Type:* java.lang.String

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.scheme"></a>

```java
public java.lang.String getScheme();
```

- *Type:* java.lang.String

---

##### `sealWrap`<sup>Required</sup> <a name="sealWrap" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.sealWrap"></a>

```java
public java.lang.Boolean|IResolvable getSealWrap();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

##### `tokenWo`<sup>Required</sup> <a name="tokenWo" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.tokenWo"></a>

```java
public java.lang.String getTokenWo();
```

- *Type:* java.lang.String

---

##### `tokenWoVersion`<sup>Required</sup> <a name="tokenWoVersion" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.tokenWoVersion"></a>

```java
public java.lang.Number getTokenWoVersion();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackend.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ConsulSecretBackendConfig <a name="ConsulSecretBackendConfig" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.consul_secret_backend.ConsulSecretBackendConfig;

ConsulSecretBackendConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .address(java.lang.String)
//  .allowedManagedKeys(java.util.List<java.lang.String>)
//  .allowedResponseHeaders(java.util.List<java.lang.String>)
//  .auditNonHmacRequestKeys(java.util.List<java.lang.String>)
//  .auditNonHmacResponseKeys(java.util.List<java.lang.String>)
//  .bootstrap(java.lang.Boolean|IResolvable)
//  .caCert(java.lang.String)
//  .clientCert(java.lang.String)
//  .clientKey(java.lang.String)
//  .clientKeyWo(java.lang.String)
//  .clientKeyWoVersion(java.lang.Number)
//  .defaultLeaseTtlSeconds(java.lang.Number)
//  .delegatedAuthAccessors(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .disableRemount(java.lang.Boolean|IResolvable)
//  .externalEntropyAccess(java.lang.Boolean|IResolvable)
//  .forceNoCache(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .identityTokenKey(java.lang.String)
//  .listingVisibility(java.lang.String)
//  .local(java.lang.Boolean|IResolvable)
//  .maxLeaseTtlSeconds(java.lang.Number)
//  .namespace(java.lang.String)
//  .options(java.util.Map<java.lang.String, java.lang.String>)
//  .passthroughRequestHeaders(java.util.List<java.lang.String>)
//  .path(java.lang.String)
//  .pluginVersion(java.lang.String)
//  .scheme(java.lang.String)
//  .sealWrap(java.lang.Boolean|IResolvable)
//  .token(java.lang.String)
//  .tokenWo(java.lang.String)
//  .tokenWoVersion(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.address">address</a></code> | <code>java.lang.String</code> | Specifies the address of the Consul instance, provided as "host:port" like "127.0.0.1:8500". |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.allowedManagedKeys">allowedManagedKeys</a></code> | <code>java.util.List<java.lang.String></code> | List of managed key registry entry names that the mount in question is allowed to access. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.allowedResponseHeaders">allowedResponseHeaders</a></code> | <code>java.util.List<java.lang.String></code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.auditNonHmacRequestKeys">auditNonHmacRequestKeys</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the list of keys that will not be HMAC'd by audit devices in the request data object. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.auditNonHmacResponseKeys">auditNonHmacResponseKeys</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the list of keys that will not be HMAC'd by audit devices in the response data object. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.bootstrap">bootstrap</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Denotes a backend resource that is used to bootstrap the Consul ACL system. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.caCert">caCert</a></code> | <code>java.lang.String</code> | CA certificate to use when verifying Consul server certificate, must be x509 PEM encoded. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.clientCert">clientCert</a></code> | <code>java.lang.String</code> | Client certificate used for Consul's TLS communication, must be x509 PEM encoded and if this is set you need to also set client_key. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.clientKey">clientKey</a></code> | <code>java.lang.String</code> | Client key used for Consul's TLS communication, must be x509 PEM encoded and if this is set you need to also set client_cert. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.clientKeyWo">clientKeyWo</a></code> | <code>java.lang.String</code> | Client key used for Consul's TLS communication, must be x509 PEM encoded. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.clientKeyWoVersion">clientKeyWoVersion</a></code> | <code>java.lang.Number</code> | Version counter for the write-only client key. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.defaultLeaseTtlSeconds">defaultLeaseTtlSeconds</a></code> | <code>java.lang.Number</code> | Default lease duration for secrets in seconds. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.delegatedAuthAccessors">delegatedAuthAccessors</a></code> | <code>java.util.List<java.lang.String></code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.description">description</a></code> | <code>java.lang.String</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.disableRemount">disableRemount</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.externalEntropyAccess">externalEntropyAccess</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enable the secrets engine to access Vault's external entropy source. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.forceNoCache">forceNoCache</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set to true, disables caching. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#id ConsulSecretBackend#id}. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.identityTokenKey">identityTokenKey</a></code> | <code>java.lang.String</code> | The key to use for signing plugin workload identity tokens. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.listingVisibility">listingVisibility</a></code> | <code>java.lang.String</code> | Specifies whether to show this mount in the UI-specific listing endpoint. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.local">local</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies if the secret backend is local only. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.maxLeaseTtlSeconds">maxLeaseTtlSeconds</a></code> | <code>java.lang.Number</code> | Maximum possible lease duration for secrets in seconds. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.options">options</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Specifies mount type specific options that are passed to the backend. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.passthroughRequestHeaders">passthroughRequestHeaders</a></code> | <code>java.util.List<java.lang.String></code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.path">path</a></code> | <code>java.lang.String</code> | Unique name of the Vault Consul mount to configure. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.pluginVersion">pluginVersion</a></code> | <code>java.lang.String</code> | Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.scheme">scheme</a></code> | <code>java.lang.String</code> | Specifies the URL scheme to use. Defaults to "http". |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.sealWrap">sealWrap</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.token">token</a></code> | <code>java.lang.String</code> | Specifies the Consul token to use when managing or issuing new tokens. Mutually exclusive with 'token_wo'. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.tokenWo">tokenWo</a></code> | <code>java.lang.String</code> | Specifies the Consul token to use when managing or issuing new tokens. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.tokenWoVersion">tokenWoVersion</a></code> | <code>java.lang.Number</code> | Version counter for the write-only token. Increment this value to trigger rotation of the token. Required when using 'token_wo'. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

Specifies the address of the Consul instance, provided as "host:port" like "127.0.0.1:8500".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#address ConsulSecretBackend#address}

---

##### `allowedManagedKeys`<sup>Optional</sup> <a name="allowedManagedKeys" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.allowedManagedKeys"></a>

```java
public java.util.List<java.lang.String> getAllowedManagedKeys();
```

- *Type:* java.util.List<java.lang.String>

List of managed key registry entry names that the mount in question is allowed to access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#allowed_managed_keys ConsulSecretBackend#allowed_managed_keys}

---

##### `allowedResponseHeaders`<sup>Optional</sup> <a name="allowedResponseHeaders" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.allowedResponseHeaders"></a>

```java
public java.util.List<java.lang.String> getAllowedResponseHeaders();
```

- *Type:* java.util.List<java.lang.String>

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#allowed_response_headers ConsulSecretBackend#allowed_response_headers}

---

##### `auditNonHmacRequestKeys`<sup>Optional</sup> <a name="auditNonHmacRequestKeys" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.auditNonHmacRequestKeys"></a>

```java
public java.util.List<java.lang.String> getAuditNonHmacRequestKeys();
```

- *Type:* java.util.List<java.lang.String>

Specifies the list of keys that will not be HMAC'd by audit devices in the request data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#audit_non_hmac_request_keys ConsulSecretBackend#audit_non_hmac_request_keys}

---

##### `auditNonHmacResponseKeys`<sup>Optional</sup> <a name="auditNonHmacResponseKeys" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.auditNonHmacResponseKeys"></a>

```java
public java.util.List<java.lang.String> getAuditNonHmacResponseKeys();
```

- *Type:* java.util.List<java.lang.String>

Specifies the list of keys that will not be HMAC'd by audit devices in the response data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#audit_non_hmac_response_keys ConsulSecretBackend#audit_non_hmac_response_keys}

---

##### `bootstrap`<sup>Optional</sup> <a name="bootstrap" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.bootstrap"></a>

```java
public java.lang.Boolean|IResolvable getBootstrap();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Denotes a backend resource that is used to bootstrap the Consul ACL system.

Only one resource may be used to bootstrap.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#bootstrap ConsulSecretBackend#bootstrap}

---

##### `caCert`<sup>Optional</sup> <a name="caCert" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.caCert"></a>

```java
public java.lang.String getCaCert();
```

- *Type:* java.lang.String

CA certificate to use when verifying Consul server certificate, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#ca_cert ConsulSecretBackend#ca_cert}

---

##### `clientCert`<sup>Optional</sup> <a name="clientCert" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.clientCert"></a>

```java
public java.lang.String getClientCert();
```

- *Type:* java.lang.String

Client certificate used for Consul's TLS communication, must be x509 PEM encoded and if this is set you need to also set client_key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#client_cert ConsulSecretBackend#client_cert}

---

##### `clientKey`<sup>Optional</sup> <a name="clientKey" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.clientKey"></a>

```java
public java.lang.String getClientKey();
```

- *Type:* java.lang.String

Client key used for Consul's TLS communication, must be x509 PEM encoded and if this is set you need to also set client_cert.

Mutually exclusive with 'client_key_wo'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#client_key ConsulSecretBackend#client_key}

---

##### `clientKeyWo`<sup>Optional</sup> <a name="clientKeyWo" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.clientKeyWo"></a>

```java
public java.lang.String getClientKeyWo();
```

- *Type:* java.lang.String

Client key used for Consul's TLS communication, must be x509 PEM encoded.

This field is write-only and will never be stored in state. Mutually exclusive with 'client_key'. Requires 'client_key_wo_version' to trigger updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#client_key_wo ConsulSecretBackend#client_key_wo}

---

##### `clientKeyWoVersion`<sup>Optional</sup> <a name="clientKeyWoVersion" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.clientKeyWoVersion"></a>

```java
public java.lang.Number getClientKeyWoVersion();
```

- *Type:* java.lang.Number

Version counter for the write-only client key.

Increment this value to trigger rotation of the client key. Required when using 'client_key_wo'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#client_key_wo_version ConsulSecretBackend#client_key_wo_version}

---

##### `defaultLeaseTtlSeconds`<sup>Optional</sup> <a name="defaultLeaseTtlSeconds" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.defaultLeaseTtlSeconds"></a>

```java
public java.lang.Number getDefaultLeaseTtlSeconds();
```

- *Type:* java.lang.Number

Default lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#default_lease_ttl_seconds ConsulSecretBackend#default_lease_ttl_seconds}

---

##### `delegatedAuthAccessors`<sup>Optional</sup> <a name="delegatedAuthAccessors" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.delegatedAuthAccessors"></a>

```java
public java.util.List<java.lang.String> getDelegatedAuthAccessors();
```

- *Type:* java.util.List<java.lang.String>

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#delegated_auth_accessors ConsulSecretBackend#delegated_auth_accessors}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#description ConsulSecretBackend#description}

---

##### `disableRemount`<sup>Optional</sup> <a name="disableRemount" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.disableRemount"></a>

```java
public java.lang.Boolean|IResolvable getDisableRemount();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#disable_remount ConsulSecretBackend#disable_remount}

---

##### `externalEntropyAccess`<sup>Optional</sup> <a name="externalEntropyAccess" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.externalEntropyAccess"></a>

```java
public java.lang.Boolean|IResolvable getExternalEntropyAccess();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enable the secrets engine to access Vault's external entropy source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#external_entropy_access ConsulSecretBackend#external_entropy_access}

---

##### `forceNoCache`<sup>Optional</sup> <a name="forceNoCache" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.forceNoCache"></a>

```java
public java.lang.Boolean|IResolvable getForceNoCache();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set to true, disables caching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#force_no_cache ConsulSecretBackend#force_no_cache}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#id ConsulSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityTokenKey`<sup>Optional</sup> <a name="identityTokenKey" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.identityTokenKey"></a>

```java
public java.lang.String getIdentityTokenKey();
```

- *Type:* java.lang.String

The key to use for signing plugin workload identity tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#identity_token_key ConsulSecretBackend#identity_token_key}

---

##### `listingVisibility`<sup>Optional</sup> <a name="listingVisibility" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.listingVisibility"></a>

```java
public java.lang.String getListingVisibility();
```

- *Type:* java.lang.String

Specifies whether to show this mount in the UI-specific listing endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#listing_visibility ConsulSecretBackend#listing_visibility}

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.local"></a>

```java
public java.lang.Boolean|IResolvable getLocal();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies if the secret backend is local only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#local ConsulSecretBackend#local}

---

##### `maxLeaseTtlSeconds`<sup>Optional</sup> <a name="maxLeaseTtlSeconds" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.maxLeaseTtlSeconds"></a>

```java
public java.lang.Number getMaxLeaseTtlSeconds();
```

- *Type:* java.lang.Number

Maximum possible lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#max_lease_ttl_seconds ConsulSecretBackend#max_lease_ttl_seconds}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#namespace ConsulSecretBackend#namespace}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.options"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Specifies mount type specific options that are passed to the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#options ConsulSecretBackend#options}

---

##### `passthroughRequestHeaders`<sup>Optional</sup> <a name="passthroughRequestHeaders" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.passthroughRequestHeaders"></a>

```java
public java.util.List<java.lang.String> getPassthroughRequestHeaders();
```

- *Type:* java.util.List<java.lang.String>

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#passthrough_request_headers ConsulSecretBackend#passthrough_request_headers}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Unique name of the Vault Consul mount to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#path ConsulSecretBackend#path}

---

##### `pluginVersion`<sup>Optional</sup> <a name="pluginVersion" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.pluginVersion"></a>

```java
public java.lang.String getPluginVersion();
```

- *Type:* java.lang.String

Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#plugin_version ConsulSecretBackend#plugin_version}

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.scheme"></a>

```java
public java.lang.String getScheme();
```

- *Type:* java.lang.String

Specifies the URL scheme to use. Defaults to "http".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#scheme ConsulSecretBackend#scheme}

---

##### `sealWrap`<sup>Optional</sup> <a name="sealWrap" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.sealWrap"></a>

```java
public java.lang.Boolean|IResolvable getSealWrap();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#seal_wrap ConsulSecretBackend#seal_wrap}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

Specifies the Consul token to use when managing or issuing new tokens. Mutually exclusive with 'token_wo'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#token ConsulSecretBackend#token}

---

##### `tokenWo`<sup>Optional</sup> <a name="tokenWo" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.tokenWo"></a>

```java
public java.lang.String getTokenWo();
```

- *Type:* java.lang.String

Specifies the Consul token to use when managing or issuing new tokens.

This field is write-only and will never be stored in state. Mutually exclusive with 'token'. Requires 'token_wo_version' to trigger updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#token_wo ConsulSecretBackend#token_wo}

---

##### `tokenWoVersion`<sup>Optional</sup> <a name="tokenWoVersion" id="@cdktn/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.tokenWoVersion"></a>

```java
public java.lang.Number getTokenWoVersion();
```

- *Type:* java.lang.Number

Version counter for the write-only token. Increment this value to trigger rotation of the token. Required when using 'token_wo'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/consul_secret_backend#token_wo_version ConsulSecretBackend#token_wo_version}

---



