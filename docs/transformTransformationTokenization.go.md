# `transformTransformationTokenization` Submodule <a name="`transformTransformationTokenization` Submodule" id="@cdktn/provider-vault.transformTransformationTokenization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransformTransformationTokenization <a name="TransformTransformationTokenization" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization vault_transform_transformation_tokenization}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/transformtransformationtokenization"

transformtransformationtokenization.NewTransformTransformationTokenization(scope Construct, id *string, config TransformTransformationTokenizationConfig) TransformTransformationTokenization
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig">TransformTransformationTokenizationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig">TransformTransformationTokenizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetAllowedRoles">ResetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetConvergent">ResetConvergent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetDeletionAllowed">ResetDeletionAllowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetMappingMode">ResetMappingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetMaxTtl">ResetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetStores">ResetStores</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAllowedRoles` <a name="ResetAllowedRoles" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetAllowedRoles"></a>

```go
func ResetAllowedRoles()
```

##### `ResetConvergent` <a name="ResetConvergent" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetConvergent"></a>

```go
func ResetConvergent()
```

##### `ResetDeletionAllowed` <a name="ResetDeletionAllowed" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetDeletionAllowed"></a>

```go
func ResetDeletionAllowed()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetId"></a>

```go
func ResetId()
```

##### `ResetMappingMode` <a name="ResetMappingMode" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetMappingMode"></a>

```go
func ResetMappingMode()
```

##### `ResetMaxTtl` <a name="ResetMaxTtl" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetMaxTtl"></a>

```go
func ResetMaxTtl()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetStores` <a name="ResetStores" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetStores"></a>

```go
func ResetStores()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a TransformTransformationTokenization resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/transformtransformationtokenization"

transformtransformationtokenization.TransformTransformationTokenization_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/transformtransformationtokenization"

transformtransformationtokenization.TransformTransformationTokenization_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/transformtransformationtokenization"

transformtransformationtokenization.TransformTransformationTokenization_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/transformtransformationtokenization"

transformtransformationtokenization.TransformTransformationTokenization_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a TransformTransformationTokenization resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the TransformTransformationTokenization to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing TransformTransformationTokenization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the TransformTransformationTokenization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.allowedRolesInput">AllowedRolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.convergentInput">ConvergentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.deletionAllowedInput">DeletionAllowedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.mappingModeInput">MappingModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.maxTtlInput">MaxTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.storesInput">StoresInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.allowedRoles">AllowedRoles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.convergent">Convergent</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.deletionAllowed">DeletionAllowed</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.mappingMode">MappingMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.maxTtl">MaxTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.stores">Stores</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AllowedRolesInput`<sup>Optional</sup> <a name="AllowedRolesInput" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.allowedRolesInput"></a>

```go
func AllowedRolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ConvergentInput`<sup>Optional</sup> <a name="ConvergentInput" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.convergentInput"></a>

```go
func ConvergentInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionAllowedInput`<sup>Optional</sup> <a name="DeletionAllowedInput" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.deletionAllowedInput"></a>

```go
func DeletionAllowedInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MappingModeInput`<sup>Optional</sup> <a name="MappingModeInput" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.mappingModeInput"></a>

```go
func MappingModeInput() *string
```

- *Type:* *string

---

##### `MaxTtlInput`<sup>Optional</sup> <a name="MaxTtlInput" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.maxTtlInput"></a>

```go
func MaxTtlInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `StoresInput`<sup>Optional</sup> <a name="StoresInput" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.storesInput"></a>

```go
func StoresInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedRoles`<sup>Required</sup> <a name="AllowedRoles" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.allowedRoles"></a>

```go
func AllowedRoles() *[]*string
```

- *Type:* *[]*string

---

##### `Convergent`<sup>Required</sup> <a name="Convergent" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.convergent"></a>

```go
func Convergent() interface{}
```

- *Type:* interface{}

---

##### `DeletionAllowed`<sup>Required</sup> <a name="DeletionAllowed" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.deletionAllowed"></a>

```go
func DeletionAllowed() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MappingMode`<sup>Required</sup> <a name="MappingMode" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.mappingMode"></a>

```go
func MappingMode() *string
```

- *Type:* *string

---

##### `MaxTtl`<sup>Required</sup> <a name="MaxTtl" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.maxTtl"></a>

```go
func MaxTtl() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Stores`<sup>Required</sup> <a name="Stores" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.stores"></a>

```go
func Stores() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### TransformTransformationTokenizationConfig <a name="TransformTransformationTokenizationConfig" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/transformtransformationtokenization"

&transformtransformationtokenization.TransformTransformationTokenizationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Path: *string,
	AllowedRoles: *[]*string,
	Convergent: interface{},
	DeletionAllowed: interface{},
	Id: *string,
	MappingMode: *string,
	MaxTtl: *f64,
	Namespace: *string,
	Stores: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.name">Name</a></code> | <code>*string</code> | The name of the transformation. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.path">Path</a></code> | <code>*string</code> | The mount path for a back-end, for example, the path given in "$ vault auth enable -path=my-aws aws". |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.allowedRoles">AllowedRoles</a></code> | <code>*[]*string</code> | Specifies a list of allowed roles that this transformation can be assigned to. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.convergent">Convergent</a></code> | <code>interface{}</code> | Specifies whether to use convergent tokenization, where tokenization of the same plaintext more than once results in the same token. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.deletionAllowed">DeletionAllowed</a></code> | <code>interface{}</code> | If true, this transform can be deleted. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#id TransformTransformationTokenization#id}. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.mappingMode">MappingMode</a></code> | <code>*string</code> | Specifies the mapping mode for stored tokenization values. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.maxTtl">MaxTtl</a></code> | <code>*f64</code> | The maximum TTL of a token. If 0 or unspecified, tokens may have no expiration. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.stores">Stores</a></code> | <code>*[]*string</code> | The list of tokenization stores to use for tokenization state. Vault's internal storage is used by default. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the transformation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#name TransformTransformationTokenization#name}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

The mount path for a back-end, for example, the path given in "$ vault auth enable -path=my-aws aws".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#path TransformTransformationTokenization#path}

---

##### `AllowedRoles`<sup>Optional</sup> <a name="AllowedRoles" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.allowedRoles"></a>

```go
AllowedRoles *[]*string
```

- *Type:* *[]*string

Specifies a list of allowed roles that this transformation can be assigned to.

A role using this transformation must exist in this list in order for encode and decode operations to properly function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#allowed_roles TransformTransformationTokenization#allowed_roles}

---

##### `Convergent`<sup>Optional</sup> <a name="Convergent" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.convergent"></a>

```go
Convergent interface{}
```

- *Type:* interface{}

Specifies whether to use convergent tokenization, where tokenization of the same plaintext more than once results in the same token.

Defaults to false as unique tokens are more desirable from a security standpoint if there isn't a use-case need for convergence. This property cannot be changed after the transform is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#convergent TransformTransformationTokenization#convergent}

---

##### `DeletionAllowed`<sup>Optional</sup> <a name="DeletionAllowed" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.deletionAllowed"></a>

```go
DeletionAllowed interface{}
```

- *Type:* interface{}

If true, this transform can be deleted.

Otherwise deletion is blocked while this value remains false. Note that deleting the transform deletes the underlying key making decoding of tokenized values impossible without restoring from a backup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#deletion_allowed TransformTransformationTokenization#deletion_allowed}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#id TransformTransformationTokenization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MappingMode`<sup>Optional</sup> <a name="MappingMode" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.mappingMode"></a>

```go
MappingMode *string
```

- *Type:* *string

Specifies the mapping mode for stored tokenization values.

default is strongly recommended for highest security. exportable allows for all plaintexts to be decoded via the export-decoded endpoint in an emergency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#mapping_mode TransformTransformationTokenization#mapping_mode}

---

##### `MaxTtl`<sup>Optional</sup> <a name="MaxTtl" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.maxTtl"></a>

```go
MaxTtl *f64
```

- *Type:* *f64

The maximum TTL of a token. If 0 or unspecified, tokens may have no expiration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#max_ttl TransformTransformationTokenization#max_ttl}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#namespace TransformTransformationTokenization#namespace}

---

##### `Stores`<sup>Optional</sup> <a name="Stores" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.stores"></a>

```go
Stores *[]*string
```

- *Type:* *[]*string

The list of tokenization stores to use for tokenization state. Vault's internal storage is used by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#stores TransformTransformationTokenization#stores}

---



