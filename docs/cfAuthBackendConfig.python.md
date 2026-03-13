# `cfAuthBackendConfig` Submodule <a name="`cfAuthBackendConfig` Submodule" id="@cdktn/provider-vault.cfAuthBackendConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CfAuthBackendConfig <a name="CfAuthBackendConfig" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config vault_cf_auth_backend_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer"></a>

```python
from cdktn_provider_vault import cf_auth_backend_config

cfAuthBackendConfig.CfAuthBackendConfig(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cf_api_addr: str,
  cf_password_wo: str,
  cf_username: str,
  identity_ca_certificates: typing.List[str],
  mount: str,
  cf_api_trusted_certificates: typing.List[str] = None,
  cf_timeout: typing.Union[int, float] = None,
  login_max_seconds_not_after: typing.Union[int, float] = None,
  login_max_seconds_not_before: typing.Union[int, float] = None,
  namespace: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.cfApiAddr">cf_api_addr</a></code> | <code>str</code> | CF's full API address, used for verifying that a given `CF_INSTANCE_CERT` shows an application ID, space ID, and organization ID that presently exist. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.cfPasswordWo">cf_password_wo</a></code> | <code>str</code> | The password for authenticating to the CF API. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.cfUsername">cf_username</a></code> | <code>str</code> | The username for authenticating to the CF API. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.identityCaCertificates">identity_ca_certificates</a></code> | <code>typing.List[str]</code> | The root CA certificate(s) to be used for verifying that the `CF_INSTANCE_CERT` presented for logging in was issued by the proper authority. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.mount">mount</a></code> | <code>str</code> | Mount path for the CF auth engine in Vault. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.cfApiTrustedCertificates">cf_api_trusted_certificates</a></code> | <code>typing.List[str]</code> | The certificate(s) presented by the CF API. Configures Vault to trust these certificates when making API calls. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.cfTimeout">cf_timeout</a></code> | <code>typing.Union[int, float]</code> | The timeout for the CF API in seconds. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.loginMaxSecondsNotAfter">login_max_seconds_not_after</a></code> | <code>typing.Union[int, float]</code> | The maximum number of seconds in the future when a signature could have been created. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.loginMaxSecondsNotBefore">login_max_seconds_not_before</a></code> | <code>typing.Union[int, float]</code> | The maximum number of seconds in the past when a signature could have been created. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cf_api_addr`<sup>Required</sup> <a name="cf_api_addr" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.cfApiAddr"></a>

- *Type:* str

CF's full API address, used for verifying that a given `CF_INSTANCE_CERT` shows an application ID, space ID, and organization ID that presently exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config#cf_api_addr CfAuthBackendConfig#cf_api_addr}

---

##### `cf_password_wo`<sup>Required</sup> <a name="cf_password_wo" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.cfPasswordWo"></a>

- *Type:* str

The password for authenticating to the CF API.

This is a write-only field and will not be read back from Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config#cf_password_wo CfAuthBackendConfig#cf_password_wo}

---

##### `cf_username`<sup>Required</sup> <a name="cf_username" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.cfUsername"></a>

- *Type:* str

The username for authenticating to the CF API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config#cf_username CfAuthBackendConfig#cf_username}

---

##### `identity_ca_certificates`<sup>Required</sup> <a name="identity_ca_certificates" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.identityCaCertificates"></a>

- *Type:* typing.List[str]

The root CA certificate(s) to be used for verifying that the `CF_INSTANCE_CERT` presented for logging in was issued by the proper authority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config#identity_ca_certificates CfAuthBackendConfig#identity_ca_certificates}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.mount"></a>

- *Type:* str

Mount path for the CF auth engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config#mount CfAuthBackendConfig#mount}

---

##### `cf_api_trusted_certificates`<sup>Optional</sup> <a name="cf_api_trusted_certificates" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.cfApiTrustedCertificates"></a>

- *Type:* typing.List[str]

The certificate(s) presented by the CF API. Configures Vault to trust these certificates when making API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config#cf_api_trusted_certificates CfAuthBackendConfig#cf_api_trusted_certificates}

---

##### `cf_timeout`<sup>Optional</sup> <a name="cf_timeout" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.cfTimeout"></a>

- *Type:* typing.Union[int, float]

The timeout for the CF API in seconds.

Defaults to `0` (no timeout). Removing this field from config resets the value to `0` in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config#cf_timeout CfAuthBackendConfig#cf_timeout}

---

##### `login_max_seconds_not_after`<sup>Optional</sup> <a name="login_max_seconds_not_after" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.loginMaxSecondsNotAfter"></a>

- *Type:* typing.Union[int, float]

The maximum number of seconds in the future when a signature could have been created.

Defaults to `60`. This field is `Computed`: if removed from config, Vault retains the previously set value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config#login_max_seconds_not_after CfAuthBackendConfig#login_max_seconds_not_after}

---

##### `login_max_seconds_not_before`<sup>Optional</sup> <a name="login_max_seconds_not_before" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.loginMaxSecondsNotBefore"></a>

- *Type:* typing.Union[int, float]

The maximum number of seconds in the past when a signature could have been created.

Defaults to `300`. This field is `Computed`: if removed from config, Vault retains the previously set value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config#login_max_seconds_not_before CfAuthBackendConfig#login_max_seconds_not_before}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config#namespace CfAuthBackendConfig#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetCfApiTrustedCertificates">reset_cf_api_trusted_certificates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetCfTimeout">reset_cf_timeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetLoginMaxSecondsNotAfter">reset_login_max_seconds_not_after</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetLoginMaxSecondsNotBefore">reset_login_max_seconds_not_before</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_cf_api_trusted_certificates` <a name="reset_cf_api_trusted_certificates" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetCfApiTrustedCertificates"></a>

```python
def reset_cf_api_trusted_certificates() -> None
```

##### `reset_cf_timeout` <a name="reset_cf_timeout" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetCfTimeout"></a>

```python
def reset_cf_timeout() -> None
```

##### `reset_login_max_seconds_not_after` <a name="reset_login_max_seconds_not_after" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetLoginMaxSecondsNotAfter"></a>

```python
def reset_login_max_seconds_not_after() -> None
```

##### `reset_login_max_seconds_not_before` <a name="reset_login_max_seconds_not_before" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetLoginMaxSecondsNotBefore"></a>

```python
def reset_login_max_seconds_not_before() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetNamespace"></a>

```python
def reset_namespace() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CfAuthBackendConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.isConstruct"></a>

```python
from cdktn_provider_vault import cf_auth_backend_config

cfAuthBackendConfig.CfAuthBackendConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.isTerraformElement"></a>

```python
from cdktn_provider_vault import cf_auth_backend_config

cfAuthBackendConfig.CfAuthBackendConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.isTerraformResource"></a>

```python
from cdktn_provider_vault import cf_auth_backend_config

cfAuthBackendConfig.CfAuthBackendConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.generateConfigForImport"></a>

```python
from cdktn_provider_vault import cf_auth_backend_config

cfAuthBackendConfig.CfAuthBackendConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CfAuthBackendConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CfAuthBackendConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CfAuthBackendConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CfAuthBackendConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfApiAddrInput">cf_api_addr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfApiTrustedCertificatesInput">cf_api_trusted_certificates_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfPasswordWoInput">cf_password_wo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfTimeoutInput">cf_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfUsernameInput">cf_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.identityCaCertificatesInput">identity_ca_certificates_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.loginMaxSecondsNotAfterInput">login_max_seconds_not_after_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.loginMaxSecondsNotBeforeInput">login_max_seconds_not_before_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.mountInput">mount_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfApiAddr">cf_api_addr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfApiTrustedCertificates">cf_api_trusted_certificates</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfPasswordWo">cf_password_wo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfTimeout">cf_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfUsername">cf_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.identityCaCertificates">identity_ca_certificates</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.loginMaxSecondsNotAfter">login_max_seconds_not_after</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.loginMaxSecondsNotBefore">login_max_seconds_not_before</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.mount">mount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cf_api_addr_input`<sup>Optional</sup> <a name="cf_api_addr_input" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfApiAddrInput"></a>

```python
cf_api_addr_input: str
```

- *Type:* str

---

##### `cf_api_trusted_certificates_input`<sup>Optional</sup> <a name="cf_api_trusted_certificates_input" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfApiTrustedCertificatesInput"></a>

```python
cf_api_trusted_certificates_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cf_password_wo_input`<sup>Optional</sup> <a name="cf_password_wo_input" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfPasswordWoInput"></a>

```python
cf_password_wo_input: str
```

- *Type:* str

---

##### `cf_timeout_input`<sup>Optional</sup> <a name="cf_timeout_input" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfTimeoutInput"></a>

```python
cf_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cf_username_input`<sup>Optional</sup> <a name="cf_username_input" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfUsernameInput"></a>

```python
cf_username_input: str
```

- *Type:* str

---

##### `identity_ca_certificates_input`<sup>Optional</sup> <a name="identity_ca_certificates_input" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.identityCaCertificatesInput"></a>

```python
identity_ca_certificates_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `login_max_seconds_not_after_input`<sup>Optional</sup> <a name="login_max_seconds_not_after_input" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.loginMaxSecondsNotAfterInput"></a>

```python
login_max_seconds_not_after_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `login_max_seconds_not_before_input`<sup>Optional</sup> <a name="login_max_seconds_not_before_input" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.loginMaxSecondsNotBeforeInput"></a>

```python
login_max_seconds_not_before_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount_input`<sup>Optional</sup> <a name="mount_input" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.mountInput"></a>

```python
mount_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `cf_api_addr`<sup>Required</sup> <a name="cf_api_addr" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfApiAddr"></a>

```python
cf_api_addr: str
```

- *Type:* str

---

##### `cf_api_trusted_certificates`<sup>Required</sup> <a name="cf_api_trusted_certificates" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfApiTrustedCertificates"></a>

```python
cf_api_trusted_certificates: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cf_password_wo`<sup>Required</sup> <a name="cf_password_wo" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfPasswordWo"></a>

```python
cf_password_wo: str
```

- *Type:* str

---

##### `cf_timeout`<sup>Required</sup> <a name="cf_timeout" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfTimeout"></a>

```python
cf_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cf_username`<sup>Required</sup> <a name="cf_username" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfUsername"></a>

```python
cf_username: str
```

- *Type:* str

---

##### `identity_ca_certificates`<sup>Required</sup> <a name="identity_ca_certificates" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.identityCaCertificates"></a>

```python
identity_ca_certificates: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `login_max_seconds_not_after`<sup>Required</sup> <a name="login_max_seconds_not_after" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.loginMaxSecondsNotAfter"></a>

```python
login_max_seconds_not_after: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `login_max_seconds_not_before`<sup>Required</sup> <a name="login_max_seconds_not_before" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.loginMaxSecondsNotBefore"></a>

```python
login_max_seconds_not_before: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.mount"></a>

```python
mount: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CfAuthBackendConfigConfig <a name="CfAuthBackendConfigConfig" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.Initializer"></a>

```python
from cdktn_provider_vault import cf_auth_backend_config

cfAuthBackendConfig.CfAuthBackendConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cf_api_addr: str,
  cf_password_wo: str,
  cf_username: str,
  identity_ca_certificates: typing.List[str],
  mount: str,
  cf_api_trusted_certificates: typing.List[str] = None,
  cf_timeout: typing.Union[int, float] = None,
  login_max_seconds_not_after: typing.Union[int, float] = None,
  login_max_seconds_not_before: typing.Union[int, float] = None,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.cfApiAddr">cf_api_addr</a></code> | <code>str</code> | CF's full API address, used for verifying that a given `CF_INSTANCE_CERT` shows an application ID, space ID, and organization ID that presently exist. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.cfPasswordWo">cf_password_wo</a></code> | <code>str</code> | The password for authenticating to the CF API. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.cfUsername">cf_username</a></code> | <code>str</code> | The username for authenticating to the CF API. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.identityCaCertificates">identity_ca_certificates</a></code> | <code>typing.List[str]</code> | The root CA certificate(s) to be used for verifying that the `CF_INSTANCE_CERT` presented for logging in was issued by the proper authority. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.mount">mount</a></code> | <code>str</code> | Mount path for the CF auth engine in Vault. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.cfApiTrustedCertificates">cf_api_trusted_certificates</a></code> | <code>typing.List[str]</code> | The certificate(s) presented by the CF API. Configures Vault to trust these certificates when making API calls. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.cfTimeout">cf_timeout</a></code> | <code>typing.Union[int, float]</code> | The timeout for the CF API in seconds. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.loginMaxSecondsNotAfter">login_max_seconds_not_after</a></code> | <code>typing.Union[int, float]</code> | The maximum number of seconds in the future when a signature could have been created. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.loginMaxSecondsNotBefore">login_max_seconds_not_before</a></code> | <code>typing.Union[int, float]</code> | The maximum number of seconds in the past when a signature could have been created. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cf_api_addr`<sup>Required</sup> <a name="cf_api_addr" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.cfApiAddr"></a>

```python
cf_api_addr: str
```

- *Type:* str

CF's full API address, used for verifying that a given `CF_INSTANCE_CERT` shows an application ID, space ID, and organization ID that presently exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config#cf_api_addr CfAuthBackendConfig#cf_api_addr}

---

##### `cf_password_wo`<sup>Required</sup> <a name="cf_password_wo" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.cfPasswordWo"></a>

```python
cf_password_wo: str
```

- *Type:* str

The password for authenticating to the CF API.

This is a write-only field and will not be read back from Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config#cf_password_wo CfAuthBackendConfig#cf_password_wo}

---

##### `cf_username`<sup>Required</sup> <a name="cf_username" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.cfUsername"></a>

```python
cf_username: str
```

- *Type:* str

The username for authenticating to the CF API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config#cf_username CfAuthBackendConfig#cf_username}

---

##### `identity_ca_certificates`<sup>Required</sup> <a name="identity_ca_certificates" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.identityCaCertificates"></a>

```python
identity_ca_certificates: typing.List[str]
```

- *Type:* typing.List[str]

The root CA certificate(s) to be used for verifying that the `CF_INSTANCE_CERT` presented for logging in was issued by the proper authority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config#identity_ca_certificates CfAuthBackendConfig#identity_ca_certificates}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.mount"></a>

```python
mount: str
```

- *Type:* str

Mount path for the CF auth engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config#mount CfAuthBackendConfig#mount}

---

##### `cf_api_trusted_certificates`<sup>Optional</sup> <a name="cf_api_trusted_certificates" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.cfApiTrustedCertificates"></a>

```python
cf_api_trusted_certificates: typing.List[str]
```

- *Type:* typing.List[str]

The certificate(s) presented by the CF API. Configures Vault to trust these certificates when making API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config#cf_api_trusted_certificates CfAuthBackendConfig#cf_api_trusted_certificates}

---

##### `cf_timeout`<sup>Optional</sup> <a name="cf_timeout" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.cfTimeout"></a>

```python
cf_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The timeout for the CF API in seconds.

Defaults to `0` (no timeout). Removing this field from config resets the value to `0` in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config#cf_timeout CfAuthBackendConfig#cf_timeout}

---

##### `login_max_seconds_not_after`<sup>Optional</sup> <a name="login_max_seconds_not_after" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.loginMaxSecondsNotAfter"></a>

```python
login_max_seconds_not_after: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of seconds in the future when a signature could have been created.

Defaults to `60`. This field is `Computed`: if removed from config, Vault retains the previously set value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config#login_max_seconds_not_after CfAuthBackendConfig#login_max_seconds_not_after}

---

##### `login_max_seconds_not_before`<sup>Optional</sup> <a name="login_max_seconds_not_before" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.loginMaxSecondsNotBefore"></a>

```python
login_max_seconds_not_before: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of seconds in the past when a signature could have been created.

Defaults to `300`. This field is `Computed`: if removed from config, Vault retains the previously set value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config#login_max_seconds_not_before CfAuthBackendConfig#login_max_seconds_not_before}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config#namespace CfAuthBackendConfig#namespace}

---



