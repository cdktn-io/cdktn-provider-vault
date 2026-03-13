# `spiffeSecretBackendConfig` Submodule <a name="`spiffeSecretBackendConfig` Submodule" id="@cdktn/provider-vault.spiffeSecretBackendConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpiffeSecretBackendConfig <a name="SpiffeSecretBackendConfig" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/spiffe_secret_backend_config vault_spiffe_secret_backend_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer"></a>

```python
from cdktn_provider_vault import spiffe_secret_backend_config

spiffeSecretBackendConfig.SpiffeSecretBackendConfig(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  mount: str,
  trust_domain: str,
  bundle_refresh_hint: str = None,
  jwt_issuer_url: str = None,
  jwt_oidc_compatibility_mode: bool | IResolvable = None,
  jwt_signing_algorithm: str = None,
  key_lifetime: str = None,
  namespace: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.mount">mount</a></code> | <code>str</code> | Mount path for the SPIFFE secrets engine in Vault. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.trustDomain">trust_domain</a></code> | <code>str</code> | The SPIFFE trust domain for this backend. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.bundleRefreshHint">bundle_refresh_hint</a></code> | <code>str</code> | Refresh hint to use in trust bundles. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.jwtIssuerUrl">jwt_issuer_url</a></code> | <code>str</code> | Base URL to use for JWT iss claim. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.jwtOidcCompatibilityMode">jwt_oidc_compatibility_mode</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, SPIFFE IDs in JWT SVIDs must not exceed 255 bytes, the limit for the sub claim in OIDC. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.jwtSigningAlgorithm">jwt_signing_algorithm</a></code> | <code>str</code> | Signing algorithm to use for JWTs. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.keyLifetime">key_lifetime</a></code> | <code>str</code> | How long a signing key will live for once it starts being used to sign. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.mount"></a>

- *Type:* str

Mount path for the SPIFFE secrets engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/spiffe_secret_backend_config#mount SpiffeSecretBackendConfig#mount}

---

##### `trust_domain`<sup>Required</sup> <a name="trust_domain" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.trustDomain"></a>

- *Type:* str

The SPIFFE trust domain for this backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/spiffe_secret_backend_config#trust_domain SpiffeSecretBackendConfig#trust_domain}

---

##### `bundle_refresh_hint`<sup>Optional</sup> <a name="bundle_refresh_hint" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.bundleRefreshHint"></a>

- *Type:* str

Refresh hint to use in trust bundles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/spiffe_secret_backend_config#bundle_refresh_hint SpiffeSecretBackendConfig#bundle_refresh_hint}

---

##### `jwt_issuer_url`<sup>Optional</sup> <a name="jwt_issuer_url" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.jwtIssuerUrl"></a>

- *Type:* str

Base URL to use for JWT iss claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/spiffe_secret_backend_config#jwt_issuer_url SpiffeSecretBackendConfig#jwt_issuer_url}

---

##### `jwt_oidc_compatibility_mode`<sup>Optional</sup> <a name="jwt_oidc_compatibility_mode" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.jwtOidcCompatibilityMode"></a>

- *Type:* bool | cdktn.IResolvable

If true, SPIFFE IDs in JWT SVIDs must not exceed 255 bytes, the limit for the sub claim in OIDC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/spiffe_secret_backend_config#jwt_oidc_compatibility_mode SpiffeSecretBackendConfig#jwt_oidc_compatibility_mode}

---

##### `jwt_signing_algorithm`<sup>Optional</sup> <a name="jwt_signing_algorithm" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.jwtSigningAlgorithm"></a>

- *Type:* str

Signing algorithm to use for JWTs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/spiffe_secret_backend_config#jwt_signing_algorithm SpiffeSecretBackendConfig#jwt_signing_algorithm}

---

##### `key_lifetime`<sup>Optional</sup> <a name="key_lifetime" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.keyLifetime"></a>

- *Type:* str

How long a signing key will live for once it starts being used to sign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/spiffe_secret_backend_config#key_lifetime SpiffeSecretBackendConfig#key_lifetime}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/spiffe_secret_backend_config#namespace SpiffeSecretBackendConfig#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetBundleRefreshHint">reset_bundle_refresh_hint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetJwtIssuerUrl">reset_jwt_issuer_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetJwtOidcCompatibilityMode">reset_jwt_oidc_compatibility_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetJwtSigningAlgorithm">reset_jwt_signing_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetKeyLifetime">reset_key_lifetime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_bundle_refresh_hint` <a name="reset_bundle_refresh_hint" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetBundleRefreshHint"></a>

```python
def reset_bundle_refresh_hint() -> None
```

##### `reset_jwt_issuer_url` <a name="reset_jwt_issuer_url" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetJwtIssuerUrl"></a>

```python
def reset_jwt_issuer_url() -> None
```

##### `reset_jwt_oidc_compatibility_mode` <a name="reset_jwt_oidc_compatibility_mode" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetJwtOidcCompatibilityMode"></a>

```python
def reset_jwt_oidc_compatibility_mode() -> None
```

##### `reset_jwt_signing_algorithm` <a name="reset_jwt_signing_algorithm" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetJwtSigningAlgorithm"></a>

```python
def reset_jwt_signing_algorithm() -> None
```

##### `reset_key_lifetime` <a name="reset_key_lifetime" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetKeyLifetime"></a>

```python
def reset_key_lifetime() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetNamespace"></a>

```python
def reset_namespace() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SpiffeSecretBackendConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.isConstruct"></a>

```python
from cdktn_provider_vault import spiffe_secret_backend_config

spiffeSecretBackendConfig.SpiffeSecretBackendConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.isTerraformElement"></a>

```python
from cdktn_provider_vault import spiffe_secret_backend_config

spiffeSecretBackendConfig.SpiffeSecretBackendConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.isTerraformResource"></a>

```python
from cdktn_provider_vault import spiffe_secret_backend_config

spiffeSecretBackendConfig.SpiffeSecretBackendConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.generateConfigForImport"></a>

```python
from cdktn_provider_vault import spiffe_secret_backend_config

spiffeSecretBackendConfig.SpiffeSecretBackendConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SpiffeSecretBackendConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SpiffeSecretBackendConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SpiffeSecretBackendConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/spiffe_secret_backend_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SpiffeSecretBackendConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.bundleRefreshHintInput">bundle_refresh_hint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtIssuerUrlInput">jwt_issuer_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtOidcCompatibilityModeInput">jwt_oidc_compatibility_mode_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtSigningAlgorithmInput">jwt_signing_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.keyLifetimeInput">key_lifetime_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.mountInput">mount_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.trustDomainInput">trust_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.bundleRefreshHint">bundle_refresh_hint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtIssuerUrl">jwt_issuer_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtOidcCompatibilityMode">jwt_oidc_compatibility_mode</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtSigningAlgorithm">jwt_signing_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.keyLifetime">key_lifetime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.mount">mount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.trustDomain">trust_domain</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `bundle_refresh_hint_input`<sup>Optional</sup> <a name="bundle_refresh_hint_input" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.bundleRefreshHintInput"></a>

```python
bundle_refresh_hint_input: str
```

- *Type:* str

---

##### `jwt_issuer_url_input`<sup>Optional</sup> <a name="jwt_issuer_url_input" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtIssuerUrlInput"></a>

```python
jwt_issuer_url_input: str
```

- *Type:* str

---

##### `jwt_oidc_compatibility_mode_input`<sup>Optional</sup> <a name="jwt_oidc_compatibility_mode_input" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtOidcCompatibilityModeInput"></a>

```python
jwt_oidc_compatibility_mode_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `jwt_signing_algorithm_input`<sup>Optional</sup> <a name="jwt_signing_algorithm_input" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtSigningAlgorithmInput"></a>

```python
jwt_signing_algorithm_input: str
```

- *Type:* str

---

##### `key_lifetime_input`<sup>Optional</sup> <a name="key_lifetime_input" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.keyLifetimeInput"></a>

```python
key_lifetime_input: str
```

- *Type:* str

---

##### `mount_input`<sup>Optional</sup> <a name="mount_input" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.mountInput"></a>

```python
mount_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `trust_domain_input`<sup>Optional</sup> <a name="trust_domain_input" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.trustDomainInput"></a>

```python
trust_domain_input: str
```

- *Type:* str

---

##### `bundle_refresh_hint`<sup>Required</sup> <a name="bundle_refresh_hint" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.bundleRefreshHint"></a>

```python
bundle_refresh_hint: str
```

- *Type:* str

---

##### `jwt_issuer_url`<sup>Required</sup> <a name="jwt_issuer_url" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtIssuerUrl"></a>

```python
jwt_issuer_url: str
```

- *Type:* str

---

##### `jwt_oidc_compatibility_mode`<sup>Required</sup> <a name="jwt_oidc_compatibility_mode" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtOidcCompatibilityMode"></a>

```python
jwt_oidc_compatibility_mode: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `jwt_signing_algorithm`<sup>Required</sup> <a name="jwt_signing_algorithm" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtSigningAlgorithm"></a>

```python
jwt_signing_algorithm: str
```

- *Type:* str

---

##### `key_lifetime`<sup>Required</sup> <a name="key_lifetime" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.keyLifetime"></a>

```python
key_lifetime: str
```

- *Type:* str

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.mount"></a>

```python
mount: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `trust_domain`<sup>Required</sup> <a name="trust_domain" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.trustDomain"></a>

```python
trust_domain: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SpiffeSecretBackendConfigConfig <a name="SpiffeSecretBackendConfigConfig" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.Initializer"></a>

```python
from cdktn_provider_vault import spiffe_secret_backend_config

spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  mount: str,
  trust_domain: str,
  bundle_refresh_hint: str = None,
  jwt_issuer_url: str = None,
  jwt_oidc_compatibility_mode: bool | IResolvable = None,
  jwt_signing_algorithm: str = None,
  key_lifetime: str = None,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.mount">mount</a></code> | <code>str</code> | Mount path for the SPIFFE secrets engine in Vault. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.trustDomain">trust_domain</a></code> | <code>str</code> | The SPIFFE trust domain for this backend. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.bundleRefreshHint">bundle_refresh_hint</a></code> | <code>str</code> | Refresh hint to use in trust bundles. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.jwtIssuerUrl">jwt_issuer_url</a></code> | <code>str</code> | Base URL to use for JWT iss claim. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.jwtOidcCompatibilityMode">jwt_oidc_compatibility_mode</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, SPIFFE IDs in JWT SVIDs must not exceed 255 bytes, the limit for the sub claim in OIDC. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.jwtSigningAlgorithm">jwt_signing_algorithm</a></code> | <code>str</code> | Signing algorithm to use for JWTs. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.keyLifetime">key_lifetime</a></code> | <code>str</code> | How long a signing key will live for once it starts being used to sign. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.mount"></a>

```python
mount: str
```

- *Type:* str

Mount path for the SPIFFE secrets engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/spiffe_secret_backend_config#mount SpiffeSecretBackendConfig#mount}

---

##### `trust_domain`<sup>Required</sup> <a name="trust_domain" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.trustDomain"></a>

```python
trust_domain: str
```

- *Type:* str

The SPIFFE trust domain for this backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/spiffe_secret_backend_config#trust_domain SpiffeSecretBackendConfig#trust_domain}

---

##### `bundle_refresh_hint`<sup>Optional</sup> <a name="bundle_refresh_hint" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.bundleRefreshHint"></a>

```python
bundle_refresh_hint: str
```

- *Type:* str

Refresh hint to use in trust bundles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/spiffe_secret_backend_config#bundle_refresh_hint SpiffeSecretBackendConfig#bundle_refresh_hint}

---

##### `jwt_issuer_url`<sup>Optional</sup> <a name="jwt_issuer_url" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.jwtIssuerUrl"></a>

```python
jwt_issuer_url: str
```

- *Type:* str

Base URL to use for JWT iss claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/spiffe_secret_backend_config#jwt_issuer_url SpiffeSecretBackendConfig#jwt_issuer_url}

---

##### `jwt_oidc_compatibility_mode`<sup>Optional</sup> <a name="jwt_oidc_compatibility_mode" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.jwtOidcCompatibilityMode"></a>

```python
jwt_oidc_compatibility_mode: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, SPIFFE IDs in JWT SVIDs must not exceed 255 bytes, the limit for the sub claim in OIDC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/spiffe_secret_backend_config#jwt_oidc_compatibility_mode SpiffeSecretBackendConfig#jwt_oidc_compatibility_mode}

---

##### `jwt_signing_algorithm`<sup>Optional</sup> <a name="jwt_signing_algorithm" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.jwtSigningAlgorithm"></a>

```python
jwt_signing_algorithm: str
```

- *Type:* str

Signing algorithm to use for JWTs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/spiffe_secret_backend_config#jwt_signing_algorithm SpiffeSecretBackendConfig#jwt_signing_algorithm}

---

##### `key_lifetime`<sup>Optional</sup> <a name="key_lifetime" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.keyLifetime"></a>

```python
key_lifetime: str
```

- *Type:* str

How long a signing key will live for once it starts being used to sign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/spiffe_secret_backend_config#key_lifetime SpiffeSecretBackendConfig#key_lifetime}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/spiffe_secret_backend_config#namespace SpiffeSecretBackendConfig#namespace}

---



