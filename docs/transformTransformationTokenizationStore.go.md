# `transformTransformationTokenizationStore` Submodule <a name="`transformTransformationTokenizationStore` Submodule" id="@cdktn/provider-vault.transformTransformationTokenizationStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransformTransformationTokenizationStore <a name="TransformTransformationTokenizationStore" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store vault_transform_transformation_tokenization_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/transformtransformationtokenizationstore"

transformtransformationtokenizationstore.NewTransformTransformationTokenizationStore(scope Construct, id *string, config TransformTransformationTokenizationStoreConfig) TransformTransformationTokenizationStore
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig">TransformTransformationTokenizationStoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig">TransformTransformationTokenizationStoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetMaxConnectionLifetime">ResetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetMaxIdleConnections">ResetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetMaxOpenConnections">ResetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetSchema">ResetSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetSupportedTransformations">ResetSupportedTransformations</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetId"></a>

```go
func ResetId()
```

##### `ResetMaxConnectionLifetime` <a name="ResetMaxConnectionLifetime" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetMaxConnectionLifetime"></a>

```go
func ResetMaxConnectionLifetime()
```

##### `ResetMaxIdleConnections` <a name="ResetMaxIdleConnections" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetMaxIdleConnections"></a>

```go
func ResetMaxIdleConnections()
```

##### `ResetMaxOpenConnections` <a name="ResetMaxOpenConnections" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetMaxOpenConnections"></a>

```go
func ResetMaxOpenConnections()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetSchema"></a>

```go
func ResetSchema()
```

##### `ResetSupportedTransformations` <a name="ResetSupportedTransformations" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetSupportedTransformations"></a>

```go
func ResetSupportedTransformations()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a TransformTransformationTokenizationStore resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/transformtransformationtokenizationstore"

transformtransformationtokenizationstore.TransformTransformationTokenizationStore_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/transformtransformationtokenizationstore"

transformtransformationtokenizationstore.TransformTransformationTokenizationStore_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/transformtransformationtokenizationstore"

transformtransformationtokenizationstore.TransformTransformationTokenizationStore_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/transformtransformationtokenizationstore"

transformtransformationtokenizationstore.TransformTransformationTokenizationStore_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a TransformTransformationTokenizationStore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the TransformTransformationTokenizationStore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing TransformTransformationTokenizationStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the TransformTransformationTokenizationStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.connectionStringInput">ConnectionStringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.driverInput">DriverInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxConnectionLifetimeInput">MaxConnectionLifetimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxIdleConnectionsInput">MaxIdleConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxOpenConnectionsInput">MaxOpenConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.schemaInput">SchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.supportedTransformationsInput">SupportedTransformationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.connectionString">ConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.driver">Driver</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.supportedTransformations">SupportedTransformations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.username">Username</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConnectionStringInput`<sup>Optional</sup> <a name="ConnectionStringInput" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.connectionStringInput"></a>

```go
func ConnectionStringInput() *string
```

- *Type:* *string

---

##### `DriverInput`<sup>Optional</sup> <a name="DriverInput" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.driverInput"></a>

```go
func DriverInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MaxConnectionLifetimeInput`<sup>Optional</sup> <a name="MaxConnectionLifetimeInput" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxConnectionLifetimeInput"></a>

```go
func MaxConnectionLifetimeInput() *f64
```

- *Type:* *f64

---

##### `MaxIdleConnectionsInput`<sup>Optional</sup> <a name="MaxIdleConnectionsInput" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxIdleConnectionsInput"></a>

```go
func MaxIdleConnectionsInput() *f64
```

- *Type:* *f64

---

##### `MaxOpenConnectionsInput`<sup>Optional</sup> <a name="MaxOpenConnectionsInput" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxOpenConnectionsInput"></a>

```go
func MaxOpenConnectionsInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.schemaInput"></a>

```go
func SchemaInput() *string
```

- *Type:* *string

---

##### `SupportedTransformationsInput`<sup>Optional</sup> <a name="SupportedTransformationsInput" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.supportedTransformationsInput"></a>

```go
func SupportedTransformationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.connectionString"></a>

```go
func ConnectionString() *string
```

- *Type:* *string

---

##### `Driver`<sup>Required</sup> <a name="Driver" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.driver"></a>

```go
func Driver() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaxConnectionLifetime`<sup>Required</sup> <a name="MaxConnectionLifetime" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxConnectionLifetime"></a>

```go
func MaxConnectionLifetime() *f64
```

- *Type:* *f64

---

##### `MaxIdleConnections`<sup>Required</sup> <a name="MaxIdleConnections" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxIdleConnections"></a>

```go
func MaxIdleConnections() *f64
```

- *Type:* *f64

---

##### `MaxOpenConnections`<sup>Required</sup> <a name="MaxOpenConnections" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxOpenConnections"></a>

```go
func MaxOpenConnections() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

##### `SupportedTransformations`<sup>Required</sup> <a name="SupportedTransformations" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.supportedTransformations"></a>

```go
func SupportedTransformations() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### TransformTransformationTokenizationStoreConfig <a name="TransformTransformationTokenizationStoreConfig" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/transformtransformationtokenizationstore"

&transformtransformationtokenizationstore.TransformTransformationTokenizationStoreConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ConnectionString: *string,
	Driver: *string,
	Name: *string,
	Password: *string,
	Path: *string,
	Type: *string,
	Username: *string,
	Id: *string,
	MaxConnectionLifetime: *f64,
	MaxIdleConnections: *f64,
	MaxOpenConnections: *f64,
	Namespace: *string,
	Schema: *string,
	SupportedTransformations: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.connectionString">ConnectionString</a></code> | <code>*string</code> | A database connection string with template slots for username and password that Vault will use for locating and connecting to a database. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.driver">Driver</a></code> | <code>*string</code> | Specifies the database driver to use, and thus which SQL database type. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.name">Name</a></code> | <code>*string</code> | The name of the store. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.password">Password</a></code> | <code>*string</code> | Password value to use to connect to database. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.path">Path</a></code> | <code>*string</code> | The mount path for a back-end, for example, the path given in "$ vault auth enable -path=my-aws aws". |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.type">Type</a></code> | <code>*string</code> | Specifies the type of store, currently only "sql" is supported,. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.username">Username</a></code> | <code>*string</code> | Username value to use to connect to database. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#id TransformTransformationTokenizationStore#id}. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>*f64</code> | The maximum amount of time a connection can be open before closing it. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>*f64</code> | The maximum number of idle connections to the database at any given time. Default is 4. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>*f64</code> | The maximum number of connections to the database at any given time. Default is 4. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.schema">Schema</a></code> | <code>*string</code> | The schema within the database to expect tokenization state tables. Default is "public". |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.supportedTransformations">SupportedTransformations</a></code> | <code>*[]*string</code> | The types of transformations this store can support, currently only "tokenization" is supported. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.connectionString"></a>

```go
ConnectionString *string
```

- *Type:* *string

A database connection string with template slots for username and password that Vault will use for locating and connecting to a database.

Each database driver type has a different syntax for its connection strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#connection_string TransformTransformationTokenizationStore#connection_string}

---

##### `Driver`<sup>Required</sup> <a name="Driver" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.driver"></a>

```go
Driver *string
```

- *Type:* *string

Specifies the database driver to use, and thus which SQL database type.

Currently the supported options are postgres, mysql, and mssql.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#driver TransformTransformationTokenizationStore#driver}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#name TransformTransformationTokenizationStore#name}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.password"></a>

```go
Password *string
```

- *Type:* *string

Password value to use to connect to database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#password TransformTransformationTokenizationStore#password}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

The mount path for a back-end, for example, the path given in "$ vault auth enable -path=my-aws aws".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#path TransformTransformationTokenizationStore#path}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Specifies the type of store, currently only "sql" is supported,.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#type TransformTransformationTokenizationStore#type}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.username"></a>

```go
Username *string
```

- *Type:* *string

Username value to use to connect to database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#username TransformTransformationTokenizationStore#username}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#id TransformTransformationTokenizationStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxConnectionLifetime`<sup>Optional</sup> <a name="MaxConnectionLifetime" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.maxConnectionLifetime"></a>

```go
MaxConnectionLifetime *f64
```

- *Type:* *f64

The maximum amount of time a connection can be open before closing it.

0 means no limit. Default is 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#max_connection_lifetime TransformTransformationTokenizationStore#max_connection_lifetime}

---

##### `MaxIdleConnections`<sup>Optional</sup> <a name="MaxIdleConnections" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.maxIdleConnections"></a>

```go
MaxIdleConnections *f64
```

- *Type:* *f64

The maximum number of idle connections to the database at any given time. Default is 4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#max_idle_connections TransformTransformationTokenizationStore#max_idle_connections}

---

##### `MaxOpenConnections`<sup>Optional</sup> <a name="MaxOpenConnections" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.maxOpenConnections"></a>

```go
MaxOpenConnections *f64
```

- *Type:* *f64

The maximum number of connections to the database at any given time. Default is 4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#max_open_connections TransformTransformationTokenizationStore#max_open_connections}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#namespace TransformTransformationTokenizationStore#namespace}

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.schema"></a>

```go
Schema *string
```

- *Type:* *string

The schema within the database to expect tokenization state tables. Default is "public".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#schema TransformTransformationTokenizationStore#schema}

---

##### `SupportedTransformations`<sup>Optional</sup> <a name="SupportedTransformations" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.supportedTransformations"></a>

```go
SupportedTransformations *[]*string
```

- *Type:* *[]*string

The types of transformations this store can support, currently only "tokenization" is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#supported_transformations TransformTransformationTokenizationStore#supported_transformations}

---



