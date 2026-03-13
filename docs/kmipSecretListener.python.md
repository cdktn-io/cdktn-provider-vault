# `kmipSecretListener` Submodule <a name="`kmipSecretListener` Submodule" id="@cdktn/provider-vault.kmipSecretListener"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmipSecretListener <a name="KmipSecretListener" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener vault_kmip_secret_listener}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer"></a>

```python
from cdktn_provider_vault import kmip_secret_listener

kmipSecretListener.KmipSecretListener(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  address: str,
  ca: str,
  name: str,
  path: str,
  additional_client_cas: typing.List[str] = None,
  also_use_legacy_ca: bool | IResolvable = None,
  namespace: str = None,
  server_hostnames: typing.List[str] = None,
  server_ips: typing.List[str] = None,
  tls_cipher_suites: str = None,
  tls_max_version: str = None,
  tls_min_version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.address">address</a></code> | <code>str</code> | Host:port address to listen on. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.ca">ca</a></code> | <code>str</code> | Name of the CA to use to generate the server certificate and verify client certificates. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.name">name</a></code> | <code>str</code> | Unique name for the listener. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.path">path</a></code> | <code>str</code> | Path where KMIP backend is mounted. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.additionalClientCas">additional_client_cas</a></code> | <code>typing.List[str]</code> | Names of additional TLS CAs to use to verify client certificates. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.alsoUseLegacyCa">also_use_legacy_ca</a></code> | <code>bool \| cdktn.IResolvable</code> | Use the legacy unnamed CA for verifying client certificates as well. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.serverHostnames">server_hostnames</a></code> | <code>typing.List[str]</code> | DNS SANs to include in listener certificate. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.serverIps">server_ips</a></code> | <code>typing.List[str]</code> | IP SANs to include in listener certificate. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.tlsCipherSuites">tls_cipher_suites</a></code> | <code>str</code> | TLS cipher suites to allow (does not apply to tls13+). |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.tlsMaxVersion">tls_max_version</a></code> | <code>str</code> | Maximum TLS version to accept (tls12 or tls13). |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.tlsMinVersion">tls_min_version</a></code> | <code>str</code> | Minimum TLS version to accept (tls12 or tls13). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.address"></a>

- *Type:* str

Host:port address to listen on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#address KmipSecretListener#address}

---

##### `ca`<sup>Required</sup> <a name="ca" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.ca"></a>

- *Type:* str

Name of the CA to use to generate the server certificate and verify client certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#ca KmipSecretListener#ca}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.name"></a>

- *Type:* str

Unique name for the listener.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#name KmipSecretListener#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.path"></a>

- *Type:* str

Path where KMIP backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#path KmipSecretListener#path}

---

##### `additional_client_cas`<sup>Optional</sup> <a name="additional_client_cas" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.additionalClientCas"></a>

- *Type:* typing.List[str]

Names of additional TLS CAs to use to verify client certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#additional_client_cas KmipSecretListener#additional_client_cas}

---

##### `also_use_legacy_ca`<sup>Optional</sup> <a name="also_use_legacy_ca" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.alsoUseLegacyCa"></a>

- *Type:* bool | cdktn.IResolvable

Use the legacy unnamed CA for verifying client certificates as well.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#also_use_legacy_ca KmipSecretListener#also_use_legacy_ca}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#namespace KmipSecretListener#namespace}

---

##### `server_hostnames`<sup>Optional</sup> <a name="server_hostnames" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.serverHostnames"></a>

- *Type:* typing.List[str]

DNS SANs to include in listener certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#server_hostnames KmipSecretListener#server_hostnames}

---

##### `server_ips`<sup>Optional</sup> <a name="server_ips" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.serverIps"></a>

- *Type:* typing.List[str]

IP SANs to include in listener certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#server_ips KmipSecretListener#server_ips}

---

##### `tls_cipher_suites`<sup>Optional</sup> <a name="tls_cipher_suites" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.tlsCipherSuites"></a>

- *Type:* str

TLS cipher suites to allow (does not apply to tls13+).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#tls_cipher_suites KmipSecretListener#tls_cipher_suites}

---

##### `tls_max_version`<sup>Optional</sup> <a name="tls_max_version" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.tlsMaxVersion"></a>

- *Type:* str

Maximum TLS version to accept (tls12 or tls13).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#tls_max_version KmipSecretListener#tls_max_version}

---

##### `tls_min_version`<sup>Optional</sup> <a name="tls_min_version" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.tlsMinVersion"></a>

- *Type:* str

Minimum TLS version to accept (tls12 or tls13).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#tls_min_version KmipSecretListener#tls_min_version}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetAdditionalClientCas">reset_additional_client_cas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetAlsoUseLegacyCa">reset_also_use_legacy_ca</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetServerHostnames">reset_server_hostnames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetServerIps">reset_server_ips</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetTlsCipherSuites">reset_tls_cipher_suites</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetTlsMaxVersion">reset_tls_max_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetTlsMinVersion">reset_tls_min_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_additional_client_cas` <a name="reset_additional_client_cas" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetAdditionalClientCas"></a>

```python
def reset_additional_client_cas() -> None
```

##### `reset_also_use_legacy_ca` <a name="reset_also_use_legacy_ca" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetAlsoUseLegacyCa"></a>

```python
def reset_also_use_legacy_ca() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_server_hostnames` <a name="reset_server_hostnames" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetServerHostnames"></a>

```python
def reset_server_hostnames() -> None
```

##### `reset_server_ips` <a name="reset_server_ips" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetServerIps"></a>

```python
def reset_server_ips() -> None
```

##### `reset_tls_cipher_suites` <a name="reset_tls_cipher_suites" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetTlsCipherSuites"></a>

```python
def reset_tls_cipher_suites() -> None
```

##### `reset_tls_max_version` <a name="reset_tls_max_version" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetTlsMaxVersion"></a>

```python
def reset_tls_max_version() -> None
```

##### `reset_tls_min_version` <a name="reset_tls_min_version" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetTlsMinVersion"></a>

```python
def reset_tls_min_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a KmipSecretListener resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.isConstruct"></a>

```python
from cdktn_provider_vault import kmip_secret_listener

kmipSecretListener.KmipSecretListener.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.isTerraformElement"></a>

```python
from cdktn_provider_vault import kmip_secret_listener

kmipSecretListener.KmipSecretListener.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.isTerraformResource"></a>

```python
from cdktn_provider_vault import kmip_secret_listener

kmipSecretListener.KmipSecretListener.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.generateConfigForImport"></a>

```python
from cdktn_provider_vault import kmip_secret_listener

kmipSecretListener.KmipSecretListener.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a KmipSecretListener resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the KmipSecretListener to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing KmipSecretListener that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the KmipSecretListener to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.additionalClientCasInput">additional_client_cas_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.alsoUseLegacyCaInput">also_use_legacy_ca_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.caInput">ca_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.serverHostnamesInput">server_hostnames_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.serverIpsInput">server_ips_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsCipherSuitesInput">tls_cipher_suites_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsMaxVersionInput">tls_max_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsMinVersionInput">tls_min_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.additionalClientCas">additional_client_cas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.alsoUseLegacyCa">also_use_legacy_ca</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.ca">ca</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.serverHostnames">server_hostnames</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.serverIps">server_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsCipherSuites">tls_cipher_suites</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsMaxVersion">tls_max_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsMinVersion">tls_min_version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `additional_client_cas_input`<sup>Optional</sup> <a name="additional_client_cas_input" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.additionalClientCasInput"></a>

```python
additional_client_cas_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `also_use_legacy_ca_input`<sup>Optional</sup> <a name="also_use_legacy_ca_input" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.alsoUseLegacyCaInput"></a>

```python
also_use_legacy_ca_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ca_input`<sup>Optional</sup> <a name="ca_input" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.caInput"></a>

```python
ca_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `server_hostnames_input`<sup>Optional</sup> <a name="server_hostnames_input" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.serverHostnamesInput"></a>

```python
server_hostnames_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `server_ips_input`<sup>Optional</sup> <a name="server_ips_input" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.serverIpsInput"></a>

```python
server_ips_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tls_cipher_suites_input`<sup>Optional</sup> <a name="tls_cipher_suites_input" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsCipherSuitesInput"></a>

```python
tls_cipher_suites_input: str
```

- *Type:* str

---

##### `tls_max_version_input`<sup>Optional</sup> <a name="tls_max_version_input" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsMaxVersionInput"></a>

```python
tls_max_version_input: str
```

- *Type:* str

---

##### `tls_min_version_input`<sup>Optional</sup> <a name="tls_min_version_input" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsMinVersionInput"></a>

```python
tls_min_version_input: str
```

- *Type:* str

---

##### `additional_client_cas`<sup>Required</sup> <a name="additional_client_cas" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.additionalClientCas"></a>

```python
additional_client_cas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `also_use_legacy_ca`<sup>Required</sup> <a name="also_use_legacy_ca" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.alsoUseLegacyCa"></a>

```python
also_use_legacy_ca: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ca`<sup>Required</sup> <a name="ca" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.ca"></a>

```python
ca: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `server_hostnames`<sup>Required</sup> <a name="server_hostnames" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.serverHostnames"></a>

```python
server_hostnames: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `server_ips`<sup>Required</sup> <a name="server_ips" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.serverIps"></a>

```python
server_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tls_cipher_suites`<sup>Required</sup> <a name="tls_cipher_suites" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsCipherSuites"></a>

```python
tls_cipher_suites: str
```

- *Type:* str

---

##### `tls_max_version`<sup>Required</sup> <a name="tls_max_version" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsMaxVersion"></a>

```python
tls_max_version: str
```

- *Type:* str

---

##### `tls_min_version`<sup>Required</sup> <a name="tls_min_version" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsMinVersion"></a>

```python
tls_min_version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KmipSecretListenerConfig <a name="KmipSecretListenerConfig" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.Initializer"></a>

```python
from cdktn_provider_vault import kmip_secret_listener

kmipSecretListener.KmipSecretListenerConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  address: str,
  ca: str,
  name: str,
  path: str,
  additional_client_cas: typing.List[str] = None,
  also_use_legacy_ca: bool | IResolvable = None,
  namespace: str = None,
  server_hostnames: typing.List[str] = None,
  server_ips: typing.List[str] = None,
  tls_cipher_suites: str = None,
  tls_max_version: str = None,
  tls_min_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.address">address</a></code> | <code>str</code> | Host:port address to listen on. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.ca">ca</a></code> | <code>str</code> | Name of the CA to use to generate the server certificate and verify client certificates. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.name">name</a></code> | <code>str</code> | Unique name for the listener. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.path">path</a></code> | <code>str</code> | Path where KMIP backend is mounted. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.additionalClientCas">additional_client_cas</a></code> | <code>typing.List[str]</code> | Names of additional TLS CAs to use to verify client certificates. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.alsoUseLegacyCa">also_use_legacy_ca</a></code> | <code>bool \| cdktn.IResolvable</code> | Use the legacy unnamed CA for verifying client certificates as well. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.serverHostnames">server_hostnames</a></code> | <code>typing.List[str]</code> | DNS SANs to include in listener certificate. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.serverIps">server_ips</a></code> | <code>typing.List[str]</code> | IP SANs to include in listener certificate. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.tlsCipherSuites">tls_cipher_suites</a></code> | <code>str</code> | TLS cipher suites to allow (does not apply to tls13+). |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.tlsMaxVersion">tls_max_version</a></code> | <code>str</code> | Maximum TLS version to accept (tls12 or tls13). |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.tlsMinVersion">tls_min_version</a></code> | <code>str</code> | Minimum TLS version to accept (tls12 or tls13). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.address"></a>

```python
address: str
```

- *Type:* str

Host:port address to listen on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#address KmipSecretListener#address}

---

##### `ca`<sup>Required</sup> <a name="ca" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.ca"></a>

```python
ca: str
```

- *Type:* str

Name of the CA to use to generate the server certificate and verify client certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#ca KmipSecretListener#ca}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Unique name for the listener.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#name KmipSecretListener#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.path"></a>

```python
path: str
```

- *Type:* str

Path where KMIP backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#path KmipSecretListener#path}

---

##### `additional_client_cas`<sup>Optional</sup> <a name="additional_client_cas" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.additionalClientCas"></a>

```python
additional_client_cas: typing.List[str]
```

- *Type:* typing.List[str]

Names of additional TLS CAs to use to verify client certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#additional_client_cas KmipSecretListener#additional_client_cas}

---

##### `also_use_legacy_ca`<sup>Optional</sup> <a name="also_use_legacy_ca" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.alsoUseLegacyCa"></a>

```python
also_use_legacy_ca: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Use the legacy unnamed CA for verifying client certificates as well.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#also_use_legacy_ca KmipSecretListener#also_use_legacy_ca}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#namespace KmipSecretListener#namespace}

---

##### `server_hostnames`<sup>Optional</sup> <a name="server_hostnames" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.serverHostnames"></a>

```python
server_hostnames: typing.List[str]
```

- *Type:* typing.List[str]

DNS SANs to include in listener certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#server_hostnames KmipSecretListener#server_hostnames}

---

##### `server_ips`<sup>Optional</sup> <a name="server_ips" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.serverIps"></a>

```python
server_ips: typing.List[str]
```

- *Type:* typing.List[str]

IP SANs to include in listener certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#server_ips KmipSecretListener#server_ips}

---

##### `tls_cipher_suites`<sup>Optional</sup> <a name="tls_cipher_suites" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.tlsCipherSuites"></a>

```python
tls_cipher_suites: str
```

- *Type:* str

TLS cipher suites to allow (does not apply to tls13+).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#tls_cipher_suites KmipSecretListener#tls_cipher_suites}

---

##### `tls_max_version`<sup>Optional</sup> <a name="tls_max_version" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.tlsMaxVersion"></a>

```python
tls_max_version: str
```

- *Type:* str

Maximum TLS version to accept (tls12 or tls13).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#tls_max_version KmipSecretListener#tls_max_version}

---

##### `tls_min_version`<sup>Optional</sup> <a name="tls_min_version" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.tlsMinVersion"></a>

```python
tls_min_version: str
```

- *Type:* str

Minimum TLS version to accept (tls12 or tls13).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#tls_min_version KmipSecretListener#tls_min_version}

---



