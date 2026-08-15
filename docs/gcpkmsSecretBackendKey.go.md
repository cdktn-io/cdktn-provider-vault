# `gcpkmsSecretBackendKey` Submodule <a name="`gcpkmsSecretBackendKey` Submodule" id="@cdktn/provider-vault.gcpkmsSecretBackendKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GcpkmsSecretBackendKey <a name="GcpkmsSecretBackendKey" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key vault_gcpkms_secret_backend_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/gcpkmssecretbackendkey"

gcpkmssecretbackendkey.NewGcpkmsSecretBackendKey(scope Construct, id *string, config GcpkmsSecretBackendKeyConfig) GcpkmsSecretBackendKey
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig">GcpkmsSecretBackendKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig">GcpkmsSecretBackendKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetAlgorithm">ResetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetCryptoKey">ResetCryptoKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetProtectionLevel">ResetProtectionLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetPurpose">ResetPurpose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetRotationPeriod">ResetRotationPeriod</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAlgorithm` <a name="ResetAlgorithm" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetAlgorithm"></a>

```go
func ResetAlgorithm()
```

##### `ResetCryptoKey` <a name="ResetCryptoKey" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetCryptoKey"></a>

```go
func ResetCryptoKey()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetProtectionLevel` <a name="ResetProtectionLevel" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetProtectionLevel"></a>

```go
func ResetProtectionLevel()
```

##### `ResetPurpose` <a name="ResetPurpose" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetPurpose"></a>

```go
func ResetPurpose()
```

##### `ResetRotationPeriod` <a name="ResetRotationPeriod" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetRotationPeriod"></a>

```go
func ResetRotationPeriod()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GcpkmsSecretBackendKey resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/gcpkmssecretbackendkey"

gcpkmssecretbackendkey.GcpkmsSecretBackendKey_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/gcpkmssecretbackendkey"

gcpkmssecretbackendkey.GcpkmsSecretBackendKey_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/gcpkmssecretbackendkey"

gcpkmssecretbackendkey.GcpkmsSecretBackendKey_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/gcpkmssecretbackendkey"

gcpkmssecretbackendkey.GcpkmsSecretBackendKey_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GcpkmsSecretBackendKey resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GcpkmsSecretBackendKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GcpkmsSecretBackendKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GcpkmsSecretBackendKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.nextRotationTimeSeconds">NextRotationTimeSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.primaryVersion">PrimaryVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.rotationScheduleSeconds">RotationScheduleSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.algorithmInput">AlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.cryptoKeyInput">CryptoKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.keyNameInput">KeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.keyRingInput">KeyRingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.mountInput">MountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.protectionLevelInput">ProtectionLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.purposeInput">PurposeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.rotationPeriodInput">RotationPeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.algorithm">Algorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.cryptoKey">CryptoKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.keyName">KeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.keyRing">KeyRing</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.mount">Mount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.protectionLevel">ProtectionLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.purpose">Purpose</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.rotationPeriod">RotationPeriod</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `NextRotationTimeSeconds`<sup>Required</sup> <a name="NextRotationTimeSeconds" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.nextRotationTimeSeconds"></a>

```go
func NextRotationTimeSeconds() *f64
```

- *Type:* *f64

---

##### `PrimaryVersion`<sup>Required</sup> <a name="PrimaryVersion" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.primaryVersion"></a>

```go
func PrimaryVersion() *f64
```

- *Type:* *f64

---

##### `RotationScheduleSeconds`<sup>Required</sup> <a name="RotationScheduleSeconds" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.rotationScheduleSeconds"></a>

```go
func RotationScheduleSeconds() *f64
```

- *Type:* *f64

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.algorithmInput"></a>

```go
func AlgorithmInput() *string
```

- *Type:* *string

---

##### `CryptoKeyInput`<sup>Optional</sup> <a name="CryptoKeyInput" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.cryptoKeyInput"></a>

```go
func CryptoKeyInput() *string
```

- *Type:* *string

---

##### `KeyNameInput`<sup>Optional</sup> <a name="KeyNameInput" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.keyNameInput"></a>

```go
func KeyNameInput() *string
```

- *Type:* *string

---

##### `KeyRingInput`<sup>Optional</sup> <a name="KeyRingInput" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.keyRingInput"></a>

```go
func KeyRingInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.mountInput"></a>

```go
func MountInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `ProtectionLevelInput`<sup>Optional</sup> <a name="ProtectionLevelInput" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.protectionLevelInput"></a>

```go
func ProtectionLevelInput() *string
```

- *Type:* *string

---

##### `PurposeInput`<sup>Optional</sup> <a name="PurposeInput" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.purposeInput"></a>

```go
func PurposeInput() *string
```

- *Type:* *string

---

##### `RotationPeriodInput`<sup>Optional</sup> <a name="RotationPeriodInput" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.rotationPeriodInput"></a>

```go
func RotationPeriodInput() *string
```

- *Type:* *string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.algorithm"></a>

```go
func Algorithm() *string
```

- *Type:* *string

---

##### `CryptoKey`<sup>Required</sup> <a name="CryptoKey" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.cryptoKey"></a>

```go
func CryptoKey() *string
```

- *Type:* *string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.keyName"></a>

```go
func KeyName() *string
```

- *Type:* *string

---

##### `KeyRing`<sup>Required</sup> <a name="KeyRing" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.keyRing"></a>

```go
func KeyRing() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.mount"></a>

```go
func Mount() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `ProtectionLevel`<sup>Required</sup> <a name="ProtectionLevel" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.protectionLevel"></a>

```go
func ProtectionLevel() *string
```

- *Type:* *string

---

##### `Purpose`<sup>Required</sup> <a name="Purpose" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.purpose"></a>

```go
func Purpose() *string
```

- *Type:* *string

---

##### `RotationPeriod`<sup>Required</sup> <a name="RotationPeriod" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.rotationPeriod"></a>

```go
func RotationPeriod() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GcpkmsSecretBackendKeyConfig <a name="GcpkmsSecretBackendKeyConfig" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/gcpkmssecretbackendkey"

&gcpkmssecretbackendkey.GcpkmsSecretBackendKeyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	KeyName: *string,
	KeyRing: *string,
	Mount: *string,
	Algorithm: *string,
	CryptoKey: *string,
	Labels: *map[string]*string,
	Namespace: *string,
	ProtectionLevel: *string,
	Purpose: *string,
	RotationPeriod: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.keyName">KeyName</a></code> | <code>*string</code> | Name of the key. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.keyRing">KeyRing</a></code> | <code>*string</code> | GCP KMS key ring resource ID (e.g., 'projects/my-project/locations/us-central1/keyRings/my-ring'). Required. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.mount">Mount</a></code> | <code>*string</code> | Path where the GCP KMS secrets engine is mounted. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.algorithm">Algorithm</a></code> | <code>*string</code> | Algorithm to use for the key. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.cryptoKey">CryptoKey</a></code> | <code>*string</code> | Name of the crypto key to use in GCP KMS. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels to apply to the key. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.protectionLevel">ProtectionLevel</a></code> | <code>*string</code> | Protection level of the key. Valid values: SOFTWARE, HSM. Defaults to SOFTWARE. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.purpose">Purpose</a></code> | <code>*string</code> | Purpose of the key. Valid values: encrypt_decrypt, asymmetric_sign, asymmetric_decrypt. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.rotationPeriod">RotationPeriod</a></code> | <code>*string</code> | Rotation period for the key as a duration string (e.g., '72h', '2592000s' for 30 days). Can be updated after creation. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.keyName"></a>

```go
KeyName *string
```

- *Type:* *string

Name of the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#key_name GcpkmsSecretBackendKey#key_name}

---

##### `KeyRing`<sup>Required</sup> <a name="KeyRing" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.keyRing"></a>

```go
KeyRing *string
```

- *Type:* *string

GCP KMS key ring resource ID (e.g., 'projects/my-project/locations/us-central1/keyRings/my-ring'). Required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#key_ring GcpkmsSecretBackendKey#key_ring}

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.mount"></a>

```go
Mount *string
```

- *Type:* *string

Path where the GCP KMS secrets engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#mount GcpkmsSecretBackendKey#mount}

---

##### `Algorithm`<sup>Optional</sup> <a name="Algorithm" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.algorithm"></a>

```go
Algorithm *string
```

- *Type:* *string

Algorithm to use for the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#algorithm GcpkmsSecretBackendKey#algorithm}

---

##### `CryptoKey`<sup>Optional</sup> <a name="CryptoKey" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.cryptoKey"></a>

```go
CryptoKey *string
```

- *Type:* *string

Name of the crypto key to use in GCP KMS.

If the crypto key does not exist,Vault will try to create it. This defaults to the Vault key name if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#crypto_key GcpkmsSecretBackendKey#crypto_key}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels to apply to the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#labels GcpkmsSecretBackendKey#labels}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#namespace GcpkmsSecretBackendKey#namespace}

---

##### `ProtectionLevel`<sup>Optional</sup> <a name="ProtectionLevel" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.protectionLevel"></a>

```go
ProtectionLevel *string
```

- *Type:* *string

Protection level of the key. Valid values: SOFTWARE, HSM. Defaults to SOFTWARE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#protection_level GcpkmsSecretBackendKey#protection_level}

---

##### `Purpose`<sup>Optional</sup> <a name="Purpose" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.purpose"></a>

```go
Purpose *string
```

- *Type:* *string

Purpose of the key. Valid values: encrypt_decrypt, asymmetric_sign, asymmetric_decrypt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#purpose GcpkmsSecretBackendKey#purpose}

---

##### `RotationPeriod`<sup>Optional</sup> <a name="RotationPeriod" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.rotationPeriod"></a>

```go
RotationPeriod *string
```

- *Type:* *string

Rotation period for the key as a duration string (e.g., '72h', '2592000s' for 30 days). Can be updated after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#rotation_period GcpkmsSecretBackendKey#rotation_period}

---



