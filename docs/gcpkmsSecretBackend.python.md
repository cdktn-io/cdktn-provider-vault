# `gcpkmsSecretBackend` Submodule <a name="`gcpkmsSecretBackend` Submodule" id="@cdktn/provider-vault.gcpkmsSecretBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GcpkmsSecretBackend <a name="GcpkmsSecretBackend" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend vault_gcpkms_secret_backend}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer"></a>

```python
from cdktn_provider_vault import gcpkms_secret_backend

gcpkmsSecretBackend.GcpkmsSecretBackend(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  credentials_wo_version: typing.Union[int, float],
  path: str,
  allowed_managed_keys: typing.List[str] = None,
  allowed_response_headers: typing.List[str] = None,
  audit_non_hmac_request_keys: typing.List[str] = None,
  audit_non_hmac_response_keys: typing.List[str] = None,
  credentials_wo: str = None,
  default_lease_ttl_seconds: typing.Union[int, float] = None,
  delegated_auth_accessors: typing.List[str] = None,
  description: str = None,
  external_entropy_access: bool | IResolvable = None,
  force_no_cache: bool | IResolvable = None,
  identity_token_key: str = None,
  listing_visibility: str = None,
  local: bool | IResolvable = None,
  max_lease_ttl_seconds: typing.Union[int, float] = None,
  namespace: str = None,
  options: typing.Mapping[str] = None,
  passthrough_request_headers: typing.List[str] = None,
  plugin_version: str = None,
  scopes: typing.List[str] = None,
  seal_wrap: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.credentialsWoVersion">credentials_wo_version</a></code> | <code>typing.Union[int, float]</code> | Version number for the write-only credentials. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.path">path</a></code> | <code>str</code> | Where the secret backend will be mounted. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.allowedManagedKeys">allowed_managed_keys</a></code> | <code>typing.List[str]</code> | List of managed key registry entry names that the mount in question is allowed to access. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.allowedResponseHeaders">allowed_response_headers</a></code> | <code>typing.List[str]</code> | List of headers to allow and pass from the plugin to the request. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.auditNonHmacRequestKeys">audit_non_hmac_request_keys</a></code> | <code>typing.List[str]</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the request data object. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.auditNonHmacResponseKeys">audit_non_hmac_response_keys</a></code> | <code>typing.List[str]</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the response data object. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.credentialsWo">credentials_wo</a></code> | <code>str</code> | JSON-encoded GCP service account credentials. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.defaultLeaseTtlSeconds">default_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | Default lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.delegatedAuthAccessors">delegated_auth_accessors</a></code> | <code>typing.List[str]</code> | List of auth accessor IDs that can delegate authentication to this mount. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.description">description</a></code> | <code>str</code> | Human-friendly description of the mount. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.externalEntropyAccess">external_entropy_access</a></code> | <code>bool \| cdktn.IResolvable</code> | Enable the secrets engine to access Vault's external entropy source. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.forceNoCache">force_no_cache</a></code> | <code>bool \| cdktn.IResolvable</code> | If set to true, disables caching. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.identityTokenKey">identity_token_key</a></code> | <code>str</code> | The key to use for signing plugin workload identity tokens. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.listingVisibility">listing_visibility</a></code> | <code>str</code> | Specifies whether to show this mount in the UI-specific listing endpoint. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.local">local</a></code> | <code>bool \| cdktn.IResolvable</code> | Local mount flag that can be explicitly set to true to enforce local mount in HA environment. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.maxLeaseTtlSeconds">max_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | Maximum possible lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.options">options</a></code> | <code>typing.Mapping[str]</code> | Specifies mount type specific options that are passed to the backend. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.passthroughRequestHeaders">passthrough_request_headers</a></code> | <code>typing.List[str]</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.pluginVersion">plugin_version</a></code> | <code>str</code> | Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.scopes">scopes</a></code> | <code>typing.List[str]</code> | OAuth scopes to use for GCP API requests. Defaults to ['https://www.googleapis.com/auth/cloudkms']. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.sealWrap">seal_wrap</a></code> | <code>bool \| cdktn.IResolvable</code> | Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `credentials_wo_version`<sup>Required</sup> <a name="credentials_wo_version" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.credentialsWoVersion"></a>

- *Type:* typing.Union[int, float]

Version number for the write-only credentials.

Increment this value to trigger a credential rotation. Changing this value will cause the credentials to be re-sent to Vault during the next apply. Set `credentials_wo = ""` to rotate to Default Application Credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#credentials_wo_version GcpkmsSecretBackend#credentials_wo_version}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.path"></a>

- *Type:* str

Where the secret backend will be mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#path GcpkmsSecretBackend#path}

---

##### `allowed_managed_keys`<sup>Optional</sup> <a name="allowed_managed_keys" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.allowedManagedKeys"></a>

- *Type:* typing.List[str]

List of managed key registry entry names that the mount in question is allowed to access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#allowed_managed_keys GcpkmsSecretBackend#allowed_managed_keys}

---

##### `allowed_response_headers`<sup>Optional</sup> <a name="allowed_response_headers" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.allowedResponseHeaders"></a>

- *Type:* typing.List[str]

List of headers to allow and pass from the plugin to the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#allowed_response_headers GcpkmsSecretBackend#allowed_response_headers}

---

##### `audit_non_hmac_request_keys`<sup>Optional</sup> <a name="audit_non_hmac_request_keys" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.auditNonHmacRequestKeys"></a>

- *Type:* typing.List[str]

Specifies the list of keys that will not be HMAC'd by audit devices in the request data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#audit_non_hmac_request_keys GcpkmsSecretBackend#audit_non_hmac_request_keys}

---

##### `audit_non_hmac_response_keys`<sup>Optional</sup> <a name="audit_non_hmac_response_keys" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.auditNonHmacResponseKeys"></a>

- *Type:* typing.List[str]

Specifies the list of keys that will not be HMAC'd by audit devices in the response data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#audit_non_hmac_response_keys GcpkmsSecretBackend#audit_non_hmac_response_keys}

---

##### `credentials_wo`<sup>Optional</sup> <a name="credentials_wo" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.credentialsWo"></a>

- *Type:* str

JSON-encoded GCP service account credentials.

Write-only — never stored in Terraform state. Leave this blank (`""`) to use Default Application Credentials or instance metadata authentication. Requires Terraform 1.11+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#credentials_wo GcpkmsSecretBackend#credentials_wo}

---

##### `default_lease_ttl_seconds`<sup>Optional</sup> <a name="default_lease_ttl_seconds" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.defaultLeaseTtlSeconds"></a>

- *Type:* typing.Union[int, float]

Default lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#default_lease_ttl_seconds GcpkmsSecretBackend#default_lease_ttl_seconds}

---

##### `delegated_auth_accessors`<sup>Optional</sup> <a name="delegated_auth_accessors" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.delegatedAuthAccessors"></a>

- *Type:* typing.List[str]

List of auth accessor IDs that can delegate authentication to this mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#delegated_auth_accessors GcpkmsSecretBackend#delegated_auth_accessors}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.description"></a>

- *Type:* str

Human-friendly description of the mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#description GcpkmsSecretBackend#description}

---

##### `external_entropy_access`<sup>Optional</sup> <a name="external_entropy_access" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.externalEntropyAccess"></a>

- *Type:* bool | cdktn.IResolvable

Enable the secrets engine to access Vault's external entropy source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#external_entropy_access GcpkmsSecretBackend#external_entropy_access}

---

##### `force_no_cache`<sup>Optional</sup> <a name="force_no_cache" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.forceNoCache"></a>

- *Type:* bool | cdktn.IResolvable

If set to true, disables caching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#force_no_cache GcpkmsSecretBackend#force_no_cache}

---

##### `identity_token_key`<sup>Optional</sup> <a name="identity_token_key" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.identityTokenKey"></a>

- *Type:* str

The key to use for signing plugin workload identity tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#identity_token_key GcpkmsSecretBackend#identity_token_key}

---

##### `listing_visibility`<sup>Optional</sup> <a name="listing_visibility" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.listingVisibility"></a>

- *Type:* str

Specifies whether to show this mount in the UI-specific listing endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#listing_visibility GcpkmsSecretBackend#listing_visibility}

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.local"></a>

- *Type:* bool | cdktn.IResolvable

Local mount flag that can be explicitly set to true to enforce local mount in HA environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#local GcpkmsSecretBackend#local}

---

##### `max_lease_ttl_seconds`<sup>Optional</sup> <a name="max_lease_ttl_seconds" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.maxLeaseTtlSeconds"></a>

- *Type:* typing.Union[int, float]

Maximum possible lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#max_lease_ttl_seconds GcpkmsSecretBackend#max_lease_ttl_seconds}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#namespace GcpkmsSecretBackend#namespace}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.options"></a>

- *Type:* typing.Mapping[str]

Specifies mount type specific options that are passed to the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#options GcpkmsSecretBackend#options}

---

##### `passthrough_request_headers`<sup>Optional</sup> <a name="passthrough_request_headers" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.passthroughRequestHeaders"></a>

- *Type:* typing.List[str]

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#passthrough_request_headers GcpkmsSecretBackend#passthrough_request_headers}

---

##### `plugin_version`<sup>Optional</sup> <a name="plugin_version" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.pluginVersion"></a>

- *Type:* str

Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#plugin_version GcpkmsSecretBackend#plugin_version}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.scopes"></a>

- *Type:* typing.List[str]

OAuth scopes to use for GCP API requests. Defaults to ['https://www.googleapis.com/auth/cloudkms'].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#scopes GcpkmsSecretBackend#scopes}

---

##### `seal_wrap`<sup>Optional</sup> <a name="seal_wrap" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.sealWrap"></a>

- *Type:* bool | cdktn.IResolvable

Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#seal_wrap GcpkmsSecretBackend#seal_wrap}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetAllowedManagedKeys">reset_allowed_managed_keys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetAllowedResponseHeaders">reset_allowed_response_headers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetAuditNonHmacRequestKeys">reset_audit_non_hmac_request_keys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetAuditNonHmacResponseKeys">reset_audit_non_hmac_response_keys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetCredentialsWo">reset_credentials_wo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetDefaultLeaseTtlSeconds">reset_default_lease_ttl_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetDelegatedAuthAccessors">reset_delegated_auth_accessors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetExternalEntropyAccess">reset_external_entropy_access</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetForceNoCache">reset_force_no_cache</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetIdentityTokenKey">reset_identity_token_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetListingVisibility">reset_listing_visibility</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetLocal">reset_local</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetMaxLeaseTtlSeconds">reset_max_lease_ttl_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetOptions">reset_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetPassthroughRequestHeaders">reset_passthrough_request_headers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetPluginVersion">reset_plugin_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetScopes">reset_scopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetSealWrap">reset_seal_wrap</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_allowed_managed_keys` <a name="reset_allowed_managed_keys" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetAllowedManagedKeys"></a>

```python
def reset_allowed_managed_keys() -> None
```

##### `reset_allowed_response_headers` <a name="reset_allowed_response_headers" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetAllowedResponseHeaders"></a>

```python
def reset_allowed_response_headers() -> None
```

##### `reset_audit_non_hmac_request_keys` <a name="reset_audit_non_hmac_request_keys" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetAuditNonHmacRequestKeys"></a>

```python
def reset_audit_non_hmac_request_keys() -> None
```

##### `reset_audit_non_hmac_response_keys` <a name="reset_audit_non_hmac_response_keys" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetAuditNonHmacResponseKeys"></a>

```python
def reset_audit_non_hmac_response_keys() -> None
```

##### `reset_credentials_wo` <a name="reset_credentials_wo" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetCredentialsWo"></a>

```python
def reset_credentials_wo() -> None
```

##### `reset_default_lease_ttl_seconds` <a name="reset_default_lease_ttl_seconds" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetDefaultLeaseTtlSeconds"></a>

```python
def reset_default_lease_ttl_seconds() -> None
```

##### `reset_delegated_auth_accessors` <a name="reset_delegated_auth_accessors" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetDelegatedAuthAccessors"></a>

```python
def reset_delegated_auth_accessors() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_external_entropy_access` <a name="reset_external_entropy_access" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetExternalEntropyAccess"></a>

```python
def reset_external_entropy_access() -> None
```

##### `reset_force_no_cache` <a name="reset_force_no_cache" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetForceNoCache"></a>

```python
def reset_force_no_cache() -> None
```

##### `reset_identity_token_key` <a name="reset_identity_token_key" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetIdentityTokenKey"></a>

```python
def reset_identity_token_key() -> None
```

##### `reset_listing_visibility` <a name="reset_listing_visibility" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetListingVisibility"></a>

```python
def reset_listing_visibility() -> None
```

##### `reset_local` <a name="reset_local" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetLocal"></a>

```python
def reset_local() -> None
```

##### `reset_max_lease_ttl_seconds` <a name="reset_max_lease_ttl_seconds" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetMaxLeaseTtlSeconds"></a>

```python
def reset_max_lease_ttl_seconds() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_options` <a name="reset_options" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetOptions"></a>

```python
def reset_options() -> None
```

##### `reset_passthrough_request_headers` <a name="reset_passthrough_request_headers" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetPassthroughRequestHeaders"></a>

```python
def reset_passthrough_request_headers() -> None
```

##### `reset_plugin_version` <a name="reset_plugin_version" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetPluginVersion"></a>

```python
def reset_plugin_version() -> None
```

##### `reset_scopes` <a name="reset_scopes" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetScopes"></a>

```python
def reset_scopes() -> None
```

##### `reset_seal_wrap` <a name="reset_seal_wrap" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetSealWrap"></a>

```python
def reset_seal_wrap() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GcpkmsSecretBackend resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.isConstruct"></a>

```python
from cdktn_provider_vault import gcpkms_secret_backend

gcpkmsSecretBackend.GcpkmsSecretBackend.is_construct(
  x: typing.Any
)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.isTerraformElement"></a>

```python
from cdktn_provider_vault import gcpkms_secret_backend

gcpkmsSecretBackend.GcpkmsSecretBackend.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.isTerraformResource"></a>

```python
from cdktn_provider_vault import gcpkms_secret_backend

gcpkmsSecretBackend.GcpkmsSecretBackend.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.generateConfigForImport"></a>

```python
from cdktn_provider_vault import gcpkms_secret_backend

gcpkmsSecretBackend.GcpkmsSecretBackend.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GcpkmsSecretBackend resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GcpkmsSecretBackend to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GcpkmsSecretBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GcpkmsSecretBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.accessor">accessor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.allowedManagedKeysInput">allowed_managed_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.allowedResponseHeadersInput">allowed_response_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.auditNonHmacRequestKeysInput">audit_non_hmac_request_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.auditNonHmacResponseKeysInput">audit_non_hmac_response_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.credentialsWoInput">credentials_wo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.credentialsWoVersionInput">credentials_wo_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.defaultLeaseTtlSecondsInput">default_lease_ttl_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.delegatedAuthAccessorsInput">delegated_auth_accessors_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.externalEntropyAccessInput">external_entropy_access_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.forceNoCacheInput">force_no_cache_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.identityTokenKeyInput">identity_token_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.listingVisibilityInput">listing_visibility_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.localInput">local_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.maxLeaseTtlSecondsInput">max_lease_ttl_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.optionsInput">options_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.passthroughRequestHeadersInput">passthrough_request_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.pluginVersionInput">plugin_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.scopesInput">scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.sealWrapInput">seal_wrap_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.allowedManagedKeys">allowed_managed_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.allowedResponseHeaders">allowed_response_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.auditNonHmacRequestKeys">audit_non_hmac_request_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.auditNonHmacResponseKeys">audit_non_hmac_response_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.credentialsWo">credentials_wo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.credentialsWoVersion">credentials_wo_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.defaultLeaseTtlSeconds">default_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.delegatedAuthAccessors">delegated_auth_accessors</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.externalEntropyAccess">external_entropy_access</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.forceNoCache">force_no_cache</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.identityTokenKey">identity_token_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.listingVisibility">listing_visibility</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.local">local</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.maxLeaseTtlSeconds">max_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.options">options</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.passthroughRequestHeaders">passthrough_request_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.pluginVersion">plugin_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.sealWrap">seal_wrap</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `accessor`<sup>Required</sup> <a name="accessor" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.accessor"></a>

```python
accessor: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `allowed_managed_keys_input`<sup>Optional</sup> <a name="allowed_managed_keys_input" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.allowedManagedKeysInput"></a>

```python
allowed_managed_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_response_headers_input`<sup>Optional</sup> <a name="allowed_response_headers_input" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.allowedResponseHeadersInput"></a>

```python
allowed_response_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `audit_non_hmac_request_keys_input`<sup>Optional</sup> <a name="audit_non_hmac_request_keys_input" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.auditNonHmacRequestKeysInput"></a>

```python
audit_non_hmac_request_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `audit_non_hmac_response_keys_input`<sup>Optional</sup> <a name="audit_non_hmac_response_keys_input" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.auditNonHmacResponseKeysInput"></a>

```python
audit_non_hmac_response_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `credentials_wo_input`<sup>Optional</sup> <a name="credentials_wo_input" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.credentialsWoInput"></a>

```python
credentials_wo_input: str
```

- *Type:* str

---

##### `credentials_wo_version_input`<sup>Optional</sup> <a name="credentials_wo_version_input" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.credentialsWoVersionInput"></a>

```python
credentials_wo_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_lease_ttl_seconds_input`<sup>Optional</sup> <a name="default_lease_ttl_seconds_input" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.defaultLeaseTtlSecondsInput"></a>

```python
default_lease_ttl_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `delegated_auth_accessors_input`<sup>Optional</sup> <a name="delegated_auth_accessors_input" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.delegatedAuthAccessorsInput"></a>

```python
delegated_auth_accessors_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `external_entropy_access_input`<sup>Optional</sup> <a name="external_entropy_access_input" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.externalEntropyAccessInput"></a>

```python
external_entropy_access_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `force_no_cache_input`<sup>Optional</sup> <a name="force_no_cache_input" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.forceNoCacheInput"></a>

```python
force_no_cache_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `identity_token_key_input`<sup>Optional</sup> <a name="identity_token_key_input" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.identityTokenKeyInput"></a>

```python
identity_token_key_input: str
```

- *Type:* str

---

##### `listing_visibility_input`<sup>Optional</sup> <a name="listing_visibility_input" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.listingVisibilityInput"></a>

```python
listing_visibility_input: str
```

- *Type:* str

---

##### `local_input`<sup>Optional</sup> <a name="local_input" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.localInput"></a>

```python
local_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `max_lease_ttl_seconds_input`<sup>Optional</sup> <a name="max_lease_ttl_seconds_input" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.maxLeaseTtlSecondsInput"></a>

```python
max_lease_ttl_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.optionsInput"></a>

```python
options_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `passthrough_request_headers_input`<sup>Optional</sup> <a name="passthrough_request_headers_input" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.passthroughRequestHeadersInput"></a>

```python
passthrough_request_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `plugin_version_input`<sup>Optional</sup> <a name="plugin_version_input" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.pluginVersionInput"></a>

```python
plugin_version_input: str
```

- *Type:* str

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.scopesInput"></a>

```python
scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `seal_wrap_input`<sup>Optional</sup> <a name="seal_wrap_input" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.sealWrapInput"></a>

```python
seal_wrap_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `allowed_managed_keys`<sup>Required</sup> <a name="allowed_managed_keys" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.allowedManagedKeys"></a>

```python
allowed_managed_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_response_headers`<sup>Required</sup> <a name="allowed_response_headers" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.allowedResponseHeaders"></a>

```python
allowed_response_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `audit_non_hmac_request_keys`<sup>Required</sup> <a name="audit_non_hmac_request_keys" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.auditNonHmacRequestKeys"></a>

```python
audit_non_hmac_request_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `audit_non_hmac_response_keys`<sup>Required</sup> <a name="audit_non_hmac_response_keys" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.auditNonHmacResponseKeys"></a>

```python
audit_non_hmac_response_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### ~~`credentials_wo`~~<sup>Required</sup> <a name="credentials_wo" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.credentialsWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```python
credentials_wo: str
```

- *Type:* str

---

##### `credentials_wo_version`<sup>Required</sup> <a name="credentials_wo_version" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.credentialsWoVersion"></a>

```python
credentials_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_lease_ttl_seconds`<sup>Required</sup> <a name="default_lease_ttl_seconds" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.defaultLeaseTtlSeconds"></a>

```python
default_lease_ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `delegated_auth_accessors`<sup>Required</sup> <a name="delegated_auth_accessors" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.delegatedAuthAccessors"></a>

```python
delegated_auth_accessors: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `external_entropy_access`<sup>Required</sup> <a name="external_entropy_access" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.externalEntropyAccess"></a>

```python
external_entropy_access: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `force_no_cache`<sup>Required</sup> <a name="force_no_cache" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.forceNoCache"></a>

```python
force_no_cache: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `identity_token_key`<sup>Required</sup> <a name="identity_token_key" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.identityTokenKey"></a>

```python
identity_token_key: str
```

- *Type:* str

---

##### `listing_visibility`<sup>Required</sup> <a name="listing_visibility" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.listingVisibility"></a>

```python
listing_visibility: str
```

- *Type:* str

---

##### `local`<sup>Required</sup> <a name="local" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.local"></a>

```python
local: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `max_lease_ttl_seconds`<sup>Required</sup> <a name="max_lease_ttl_seconds" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.maxLeaseTtlSeconds"></a>

```python
max_lease_ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.options"></a>

```python
options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `passthrough_request_headers`<sup>Required</sup> <a name="passthrough_request_headers" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.passthroughRequestHeaders"></a>

```python
passthrough_request_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `plugin_version`<sup>Required</sup> <a name="plugin_version" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.pluginVersion"></a>

```python
plugin_version: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `seal_wrap`<sup>Required</sup> <a name="seal_wrap" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.sealWrap"></a>

```python
seal_wrap: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GcpkmsSecretBackendConfig <a name="GcpkmsSecretBackendConfig" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.Initializer"></a>

```python
from cdktn_provider_vault import gcpkms_secret_backend

gcpkmsSecretBackend.GcpkmsSecretBackendConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  credentials_wo_version: typing.Union[int, float],
  path: str,
  allowed_managed_keys: typing.List[str] = None,
  allowed_response_headers: typing.List[str] = None,
  audit_non_hmac_request_keys: typing.List[str] = None,
  audit_non_hmac_response_keys: typing.List[str] = None,
  credentials_wo: str = None,
  default_lease_ttl_seconds: typing.Union[int, float] = None,
  delegated_auth_accessors: typing.List[str] = None,
  description: str = None,
  external_entropy_access: bool | IResolvable = None,
  force_no_cache: bool | IResolvable = None,
  identity_token_key: str = None,
  listing_visibility: str = None,
  local: bool | IResolvable = None,
  max_lease_ttl_seconds: typing.Union[int, float] = None,
  namespace: str = None,
  options: typing.Mapping[str] = None,
  passthrough_request_headers: typing.List[str] = None,
  plugin_version: str = None,
  scopes: typing.List[str] = None,
  seal_wrap: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.credentialsWoVersion">credentials_wo_version</a></code> | <code>typing.Union[int, float]</code> | Version number for the write-only credentials. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.path">path</a></code> | <code>str</code> | Where the secret backend will be mounted. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.allowedManagedKeys">allowed_managed_keys</a></code> | <code>typing.List[str]</code> | List of managed key registry entry names that the mount in question is allowed to access. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.allowedResponseHeaders">allowed_response_headers</a></code> | <code>typing.List[str]</code> | List of headers to allow and pass from the plugin to the request. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.auditNonHmacRequestKeys">audit_non_hmac_request_keys</a></code> | <code>typing.List[str]</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the request data object. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.auditNonHmacResponseKeys">audit_non_hmac_response_keys</a></code> | <code>typing.List[str]</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the response data object. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.credentialsWo">credentials_wo</a></code> | <code>str</code> | JSON-encoded GCP service account credentials. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.defaultLeaseTtlSeconds">default_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | Default lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.delegatedAuthAccessors">delegated_auth_accessors</a></code> | <code>typing.List[str]</code> | List of auth accessor IDs that can delegate authentication to this mount. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.description">description</a></code> | <code>str</code> | Human-friendly description of the mount. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.externalEntropyAccess">external_entropy_access</a></code> | <code>bool \| cdktn.IResolvable</code> | Enable the secrets engine to access Vault's external entropy source. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.forceNoCache">force_no_cache</a></code> | <code>bool \| cdktn.IResolvable</code> | If set to true, disables caching. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.identityTokenKey">identity_token_key</a></code> | <code>str</code> | The key to use for signing plugin workload identity tokens. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.listingVisibility">listing_visibility</a></code> | <code>str</code> | Specifies whether to show this mount in the UI-specific listing endpoint. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.local">local</a></code> | <code>bool \| cdktn.IResolvable</code> | Local mount flag that can be explicitly set to true to enforce local mount in HA environment. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.maxLeaseTtlSeconds">max_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | Maximum possible lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.options">options</a></code> | <code>typing.Mapping[str]</code> | Specifies mount type specific options that are passed to the backend. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.passthroughRequestHeaders">passthrough_request_headers</a></code> | <code>typing.List[str]</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.pluginVersion">plugin_version</a></code> | <code>str</code> | Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | OAuth scopes to use for GCP API requests. Defaults to ['https://www.googleapis.com/auth/cloudkms']. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.sealWrap">seal_wrap</a></code> | <code>bool \| cdktn.IResolvable</code> | Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `credentials_wo_version`<sup>Required</sup> <a name="credentials_wo_version" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.credentialsWoVersion"></a>

```python
credentials_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Version number for the write-only credentials.

Increment this value to trigger a credential rotation. Changing this value will cause the credentials to be re-sent to Vault during the next apply. Set `credentials_wo = ""` to rotate to Default Application Credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#credentials_wo_version GcpkmsSecretBackend#credentials_wo_version}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.path"></a>

```python
path: str
```

- *Type:* str

Where the secret backend will be mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#path GcpkmsSecretBackend#path}

---

##### `allowed_managed_keys`<sup>Optional</sup> <a name="allowed_managed_keys" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.allowedManagedKeys"></a>

```python
allowed_managed_keys: typing.List[str]
```

- *Type:* typing.List[str]

List of managed key registry entry names that the mount in question is allowed to access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#allowed_managed_keys GcpkmsSecretBackend#allowed_managed_keys}

---

##### `allowed_response_headers`<sup>Optional</sup> <a name="allowed_response_headers" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.allowedResponseHeaders"></a>

```python
allowed_response_headers: typing.List[str]
```

- *Type:* typing.List[str]

List of headers to allow and pass from the plugin to the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#allowed_response_headers GcpkmsSecretBackend#allowed_response_headers}

---

##### `audit_non_hmac_request_keys`<sup>Optional</sup> <a name="audit_non_hmac_request_keys" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.auditNonHmacRequestKeys"></a>

```python
audit_non_hmac_request_keys: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the list of keys that will not be HMAC'd by audit devices in the request data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#audit_non_hmac_request_keys GcpkmsSecretBackend#audit_non_hmac_request_keys}

---

##### `audit_non_hmac_response_keys`<sup>Optional</sup> <a name="audit_non_hmac_response_keys" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.auditNonHmacResponseKeys"></a>

```python
audit_non_hmac_response_keys: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the list of keys that will not be HMAC'd by audit devices in the response data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#audit_non_hmac_response_keys GcpkmsSecretBackend#audit_non_hmac_response_keys}

---

##### `credentials_wo`<sup>Optional</sup> <a name="credentials_wo" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.credentialsWo"></a>

```python
credentials_wo: str
```

- *Type:* str

JSON-encoded GCP service account credentials.

Write-only — never stored in Terraform state. Leave this blank (`""`) to use Default Application Credentials or instance metadata authentication. Requires Terraform 1.11+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#credentials_wo GcpkmsSecretBackend#credentials_wo}

---

##### `default_lease_ttl_seconds`<sup>Optional</sup> <a name="default_lease_ttl_seconds" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.defaultLeaseTtlSeconds"></a>

```python
default_lease_ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Default lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#default_lease_ttl_seconds GcpkmsSecretBackend#default_lease_ttl_seconds}

---

##### `delegated_auth_accessors`<sup>Optional</sup> <a name="delegated_auth_accessors" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.delegatedAuthAccessors"></a>

```python
delegated_auth_accessors: typing.List[str]
```

- *Type:* typing.List[str]

List of auth accessor IDs that can delegate authentication to this mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#delegated_auth_accessors GcpkmsSecretBackend#delegated_auth_accessors}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Human-friendly description of the mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#description GcpkmsSecretBackend#description}

---

##### `external_entropy_access`<sup>Optional</sup> <a name="external_entropy_access" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.externalEntropyAccess"></a>

```python
external_entropy_access: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Enable the secrets engine to access Vault's external entropy source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#external_entropy_access GcpkmsSecretBackend#external_entropy_access}

---

##### `force_no_cache`<sup>Optional</sup> <a name="force_no_cache" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.forceNoCache"></a>

```python
force_no_cache: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If set to true, disables caching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#force_no_cache GcpkmsSecretBackend#force_no_cache}

---

##### `identity_token_key`<sup>Optional</sup> <a name="identity_token_key" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.identityTokenKey"></a>

```python
identity_token_key: str
```

- *Type:* str

The key to use for signing plugin workload identity tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#identity_token_key GcpkmsSecretBackend#identity_token_key}

---

##### `listing_visibility`<sup>Optional</sup> <a name="listing_visibility" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.listingVisibility"></a>

```python
listing_visibility: str
```

- *Type:* str

Specifies whether to show this mount in the UI-specific listing endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#listing_visibility GcpkmsSecretBackend#listing_visibility}

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.local"></a>

```python
local: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Local mount flag that can be explicitly set to true to enforce local mount in HA environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#local GcpkmsSecretBackend#local}

---

##### `max_lease_ttl_seconds`<sup>Optional</sup> <a name="max_lease_ttl_seconds" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.maxLeaseTtlSeconds"></a>

```python
max_lease_ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum possible lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#max_lease_ttl_seconds GcpkmsSecretBackend#max_lease_ttl_seconds}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#namespace GcpkmsSecretBackend#namespace}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.options"></a>

```python
options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Specifies mount type specific options that are passed to the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#options GcpkmsSecretBackend#options}

---

##### `passthrough_request_headers`<sup>Optional</sup> <a name="passthrough_request_headers" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.passthroughRequestHeaders"></a>

```python
passthrough_request_headers: typing.List[str]
```

- *Type:* typing.List[str]

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#passthrough_request_headers GcpkmsSecretBackend#passthrough_request_headers}

---

##### `plugin_version`<sup>Optional</sup> <a name="plugin_version" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.pluginVersion"></a>

```python
plugin_version: str
```

- *Type:* str

Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#plugin_version GcpkmsSecretBackend#plugin_version}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

OAuth scopes to use for GCP API requests. Defaults to ['https://www.googleapis.com/auth/cloudkms'].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#scopes GcpkmsSecretBackend#scopes}

---

##### `seal_wrap`<sup>Optional</sup> <a name="seal_wrap" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.sealWrap"></a>

```python
seal_wrap: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#seal_wrap GcpkmsSecretBackend#seal_wrap}

---



