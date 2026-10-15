# `ephemeralVaultPkiSecretBackendCaKeyExport` Submodule <a name="`ephemeralVaultPkiSecretBackendCaKeyExport` Submodule" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultPkiSecretBackendCaKeyExport <a name="EphemeralVaultPkiSecretBackendCaKeyExport" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/ephemeral-resources/pki_secret_backend_ca_key_export vault_pki_secret_backend_ca_key_export}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/ephemeralvaultpkisecretbackendcakeyexport"

ephemeralvaultpkisecretbackendcakeyexport.NewEphemeralVaultPkiSecretBackendCaKeyExport(scope Construct, id *string, config EphemeralVaultPkiSecretBackendCaKeyExportConfig) EphemeralVaultPkiSecretBackendCaKeyExport
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig">EphemeralVaultPkiSecretBackendCaKeyExportConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig">EphemeralVaultPkiSecretBackendCaKeyExportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.toTerraform">ToTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.resetMountId">ResetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetMountId` <a name="ResetMountId" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.resetMountId"></a>

```go
func ResetMountId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.resetNamespace"></a>

```go
func ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/ephemeralvaultpkisecretbackendcakeyexport"

ephemeralvaultpkisecretbackendcakeyexport.EphemeralVaultPkiSecretBackendCaKeyExport_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/ephemeralvaultpkisecretbackendcakeyexport"

ephemeralvaultpkisecretbackendcakeyexport.EphemeralVaultPkiSecretBackendCaKeyExport_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.isTerraformEphemeralResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/ephemeralvaultpkisecretbackendcakeyexport"

ephemeralvaultpkisecretbackendcakeyexport.EphemeralVaultPkiSecretBackendCaKeyExport_IsTerraformEphemeralResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.exportedAt">ExportedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.exportKeyHmac">ExportKeyHmac</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.wrappedKey">WrappedKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.caKeyUuidInput">CaKeyUuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.mountIdInput">MountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.mountInput">MountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.publicKeyInput">PublicKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.caKeyUuid">CaKeyUuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.mount">Mount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.mountId">MountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.publicKey">PublicKey</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.lifecycle"></a>

```go
func Lifecycle() TerraformEphemeralResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ExportedAt`<sup>Required</sup> <a name="ExportedAt" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.exportedAt"></a>

```go
func ExportedAt() *string
```

- *Type:* *string

---

##### `ExportKeyHmac`<sup>Required</sup> <a name="ExportKeyHmac" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.exportKeyHmac"></a>

```go
func ExportKeyHmac() *string
```

- *Type:* *string

---

##### `WrappedKey`<sup>Required</sup> <a name="WrappedKey" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.wrappedKey"></a>

```go
func WrappedKey() *string
```

- *Type:* *string

---

##### `CaKeyUuidInput`<sup>Optional</sup> <a name="CaKeyUuidInput" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.caKeyUuidInput"></a>

```go
func CaKeyUuidInput() *string
```

- *Type:* *string

---

##### `MountIdInput`<sup>Optional</sup> <a name="MountIdInput" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.mountIdInput"></a>

```go
func MountIdInput() *string
```

- *Type:* *string

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.mountInput"></a>

```go
func MountInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PublicKeyInput`<sup>Optional</sup> <a name="PublicKeyInput" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.publicKeyInput"></a>

```go
func PublicKeyInput() *string
```

- *Type:* *string

---

##### `CaKeyUuid`<sup>Required</sup> <a name="CaKeyUuid" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.caKeyUuid"></a>

```go
func CaKeyUuid() *string
```

- *Type:* *string

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.mount"></a>

```go
func Mount() *string
```

- *Type:* *string

---

##### `MountId`<sup>Required</sup> <a name="MountId" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.mountId"></a>

```go
func MountId() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.publicKey"></a>

```go
func PublicKey() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultPkiSecretBackendCaKeyExportConfig <a name="EphemeralVaultPkiSecretBackendCaKeyExportConfig" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/ephemeralvaultpkisecretbackendcakeyexport"

&ephemeralvaultpkisecretbackendcakeyexport.EphemeralVaultPkiSecretBackendCaKeyExportConfig {
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	CaKeyUuid: *string,
	Mount: *string,
	PublicKey: *string,
	MountId: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.caKeyUuid">CaKeyUuid</a></code> | <code>*string</code> | UUID of the CA key to export from the source mount. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.mount">Mount</a></code> | <code>*string</code> | Path of the source PKI secrets engine mount. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.publicKey">PublicKey</a></code> | <code>*string</code> | PEM-encoded public key of the destination wrapping keypair. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.mountId">MountId</a></code> | <code>*string</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.lifecycle"></a>

```go
Lifecycle TerraformEphemeralResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CaKeyUuid`<sup>Required</sup> <a name="CaKeyUuid" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.caKeyUuid"></a>

```go
CaKeyUuid *string
```

- *Type:* *string

UUID of the CA key to export from the source mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/ephemeral-resources/pki_secret_backend_ca_key_export#ca_key_uuid EphemeralVaultPkiSecretBackendCaKeyExport#ca_key_uuid}

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.mount"></a>

```go
Mount *string
```

- *Type:* *string

Path of the source PKI secrets engine mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/ephemeral-resources/pki_secret_backend_ca_key_export#mount EphemeralVaultPkiSecretBackendCaKeyExport#mount}

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.publicKey"></a>

```go
PublicKey *string
```

- *Type:* *string

PEM-encoded public key of the destination wrapping keypair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/ephemeral-resources/pki_secret_backend_ca_key_export#public_key EphemeralVaultPkiSecretBackendCaKeyExport#public_key}

---

##### `MountId`<sup>Optional</sup> <a name="MountId" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.mountId"></a>

```go
MountId *string
```

- *Type:* *string

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/ephemeral-resources/pki_secret_backend_ca_key_export#mount_id EphemeralVaultPkiSecretBackendCaKeyExport#mount_id}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/ephemeral-resources/pki_secret_backend_ca_key_export#namespace EphemeralVaultPkiSecretBackendCaKeyExport#namespace}

---



