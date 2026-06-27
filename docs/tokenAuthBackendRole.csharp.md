# `tokenAuthBackendRole` Submodule <a name="`tokenAuthBackendRole` Submodule" id="@cdktn/provider-vault.tokenAuthBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TokenAuthBackendRole <a name="TokenAuthBackendRole" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/token_auth_backend_role vault_token_auth_backend_role}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new TokenAuthBackendRole(Construct Scope, string Id, TokenAuthBackendRoleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig">TokenAuthBackendRoleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig">TokenAuthBackendRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetAliasMetadata">ResetAliasMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetAllowedEntityAliases">ResetAllowedEntityAliases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetAllowedPolicies">ResetAllowedPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetAllowedPoliciesGlob">ResetAllowedPoliciesGlob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetDisallowedPolicies">ResetDisallowedPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetDisallowedPoliciesGlob">ResetDisallowedPoliciesGlob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetOrphan">ResetOrphan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetPathSuffix">ResetPathSuffix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetRenewable">ResetRenewable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenBoundCidrs">ResetTokenBoundCidrs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenExplicitMaxTtl">ResetTokenExplicitMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenMaxTtl">ResetTokenMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenNoDefaultPolicy">ResetTokenNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenNumUses">ResetTokenNumUses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenPeriod">ResetTokenPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenPolicies">ResetTokenPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenTtl">ResetTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenType">ResetTokenType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAliasMetadata` <a name="ResetAliasMetadata" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetAliasMetadata"></a>

```csharp
private void ResetAliasMetadata()
```

##### `ResetAllowedEntityAliases` <a name="ResetAllowedEntityAliases" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetAllowedEntityAliases"></a>

```csharp
private void ResetAllowedEntityAliases()
```

##### `ResetAllowedPolicies` <a name="ResetAllowedPolicies" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetAllowedPolicies"></a>

```csharp
private void ResetAllowedPolicies()
```

##### `ResetAllowedPoliciesGlob` <a name="ResetAllowedPoliciesGlob" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetAllowedPoliciesGlob"></a>

```csharp
private void ResetAllowedPoliciesGlob()
```

##### `ResetDisallowedPolicies` <a name="ResetDisallowedPolicies" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetDisallowedPolicies"></a>

```csharp
private void ResetDisallowedPolicies()
```

##### `ResetDisallowedPoliciesGlob` <a name="ResetDisallowedPoliciesGlob" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetDisallowedPoliciesGlob"></a>

```csharp
private void ResetDisallowedPoliciesGlob()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetOrphan` <a name="ResetOrphan" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetOrphan"></a>

```csharp
private void ResetOrphan()
```

##### `ResetPathSuffix` <a name="ResetPathSuffix" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetPathSuffix"></a>

```csharp
private void ResetPathSuffix()
```

##### `ResetRenewable` <a name="ResetRenewable" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetRenewable"></a>

```csharp
private void ResetRenewable()
```

##### `ResetTokenBoundCidrs` <a name="ResetTokenBoundCidrs" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenBoundCidrs"></a>

```csharp
private void ResetTokenBoundCidrs()
```

##### `ResetTokenExplicitMaxTtl` <a name="ResetTokenExplicitMaxTtl" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenExplicitMaxTtl"></a>

```csharp
private void ResetTokenExplicitMaxTtl()
```

##### `ResetTokenMaxTtl` <a name="ResetTokenMaxTtl" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenMaxTtl"></a>

```csharp
private void ResetTokenMaxTtl()
```

##### `ResetTokenNoDefaultPolicy` <a name="ResetTokenNoDefaultPolicy" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenNoDefaultPolicy"></a>

```csharp
private void ResetTokenNoDefaultPolicy()
```

##### `ResetTokenNumUses` <a name="ResetTokenNumUses" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenNumUses"></a>

```csharp
private void ResetTokenNumUses()
```

##### `ResetTokenPeriod` <a name="ResetTokenPeriod" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenPeriod"></a>

```csharp
private void ResetTokenPeriod()
```

##### `ResetTokenPolicies` <a name="ResetTokenPolicies" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenPolicies"></a>

```csharp
private void ResetTokenPolicies()
```

##### `ResetTokenTtl` <a name="ResetTokenTtl" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenTtl"></a>

```csharp
private void ResetTokenTtl()
```

##### `ResetTokenType` <a name="ResetTokenType" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenType"></a>

```csharp
private void ResetTokenType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a TokenAuthBackendRole resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

TokenAuthBackendRole.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

TokenAuthBackendRole.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

TokenAuthBackendRole.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

TokenAuthBackendRole.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a TokenAuthBackendRole resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TokenAuthBackendRole to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TokenAuthBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/token_auth_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the TokenAuthBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.aliasMetadataInput">AliasMetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedEntityAliasesInput">AllowedEntityAliasesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedPoliciesGlobInput">AllowedPoliciesGlobInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedPoliciesInput">AllowedPoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.disallowedPoliciesGlobInput">DisallowedPoliciesGlobInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.disallowedPoliciesInput">DisallowedPoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.orphanInput">OrphanInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.pathSuffixInput">PathSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.renewableInput">RenewableInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.roleNameInput">RoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenBoundCidrsInput">TokenBoundCidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenExplicitMaxTtlInput">TokenExplicitMaxTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenMaxTtlInput">TokenMaxTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenNoDefaultPolicyInput">TokenNoDefaultPolicyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenNumUsesInput">TokenNumUsesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenPeriodInput">TokenPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenPoliciesInput">TokenPoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenTtlInput">TokenTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenTypeInput">TokenTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.aliasMetadata">AliasMetadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedEntityAliases">AllowedEntityAliases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedPolicies">AllowedPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedPoliciesGlob">AllowedPoliciesGlob</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.disallowedPolicies">DisallowedPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.disallowedPoliciesGlob">DisallowedPoliciesGlob</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.orphan">Orphan</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.pathSuffix">PathSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.renewable">Renewable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.roleName">RoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenBoundCidrs">TokenBoundCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenExplicitMaxTtl">TokenExplicitMaxTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenMaxTtl">TokenMaxTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenNoDefaultPolicy">TokenNoDefaultPolicy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenNumUses">TokenNumUses</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenPeriod">TokenPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenPolicies">TokenPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenTtl">TokenTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenType">TokenType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AliasMetadataInput`<sup>Optional</sup> <a name="AliasMetadataInput" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.aliasMetadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AliasMetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AllowedEntityAliasesInput`<sup>Optional</sup> <a name="AllowedEntityAliasesInput" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedEntityAliasesInput"></a>

```csharp
public string[] AllowedEntityAliasesInput { get; }
```

- *Type:* string[]

---

##### `AllowedPoliciesGlobInput`<sup>Optional</sup> <a name="AllowedPoliciesGlobInput" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedPoliciesGlobInput"></a>

```csharp
public string[] AllowedPoliciesGlobInput { get; }
```

- *Type:* string[]

---

##### `AllowedPoliciesInput`<sup>Optional</sup> <a name="AllowedPoliciesInput" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedPoliciesInput"></a>

```csharp
public string[] AllowedPoliciesInput { get; }
```

- *Type:* string[]

---

##### `DisallowedPoliciesGlobInput`<sup>Optional</sup> <a name="DisallowedPoliciesGlobInput" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.disallowedPoliciesGlobInput"></a>

```csharp
public string[] DisallowedPoliciesGlobInput { get; }
```

- *Type:* string[]

---

##### `DisallowedPoliciesInput`<sup>Optional</sup> <a name="DisallowedPoliciesInput" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.disallowedPoliciesInput"></a>

```csharp
public string[] DisallowedPoliciesInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `OrphanInput`<sup>Optional</sup> <a name="OrphanInput" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.orphanInput"></a>

```csharp
public bool|IResolvable OrphanInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PathSuffixInput`<sup>Optional</sup> <a name="PathSuffixInput" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.pathSuffixInput"></a>

```csharp
public string PathSuffixInput { get; }
```

- *Type:* string

---

##### `RenewableInput`<sup>Optional</sup> <a name="RenewableInput" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.renewableInput"></a>

```csharp
public bool|IResolvable RenewableInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RoleNameInput`<sup>Optional</sup> <a name="RoleNameInput" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.roleNameInput"></a>

```csharp
public string RoleNameInput { get; }
```

- *Type:* string

---

##### `TokenBoundCidrsInput`<sup>Optional</sup> <a name="TokenBoundCidrsInput" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenBoundCidrsInput"></a>

```csharp
public string[] TokenBoundCidrsInput { get; }
```

- *Type:* string[]

---

##### `TokenExplicitMaxTtlInput`<sup>Optional</sup> <a name="TokenExplicitMaxTtlInput" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenExplicitMaxTtlInput"></a>

```csharp
public double TokenExplicitMaxTtlInput { get; }
```

- *Type:* double

---

##### `TokenMaxTtlInput`<sup>Optional</sup> <a name="TokenMaxTtlInput" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenMaxTtlInput"></a>

```csharp
public double TokenMaxTtlInput { get; }
```

- *Type:* double

---

##### `TokenNoDefaultPolicyInput`<sup>Optional</sup> <a name="TokenNoDefaultPolicyInput" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenNoDefaultPolicyInput"></a>

```csharp
public bool|IResolvable TokenNoDefaultPolicyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TokenNumUsesInput`<sup>Optional</sup> <a name="TokenNumUsesInput" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenNumUsesInput"></a>

```csharp
public double TokenNumUsesInput { get; }
```

- *Type:* double

---

##### `TokenPeriodInput`<sup>Optional</sup> <a name="TokenPeriodInput" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenPeriodInput"></a>

```csharp
public double TokenPeriodInput { get; }
```

- *Type:* double

---

##### `TokenPoliciesInput`<sup>Optional</sup> <a name="TokenPoliciesInput" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenPoliciesInput"></a>

```csharp
public string[] TokenPoliciesInput { get; }
```

- *Type:* string[]

---

##### `TokenTtlInput`<sup>Optional</sup> <a name="TokenTtlInput" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenTtlInput"></a>

```csharp
public double TokenTtlInput { get; }
```

- *Type:* double

---

##### `TokenTypeInput`<sup>Optional</sup> <a name="TokenTypeInput" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenTypeInput"></a>

```csharp
public string TokenTypeInput { get; }
```

- *Type:* string

---

##### `AliasMetadata`<sup>Required</sup> <a name="AliasMetadata" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.aliasMetadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AliasMetadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AllowedEntityAliases`<sup>Required</sup> <a name="AllowedEntityAliases" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedEntityAliases"></a>

```csharp
public string[] AllowedEntityAliases { get; }
```

- *Type:* string[]

---

##### `AllowedPolicies`<sup>Required</sup> <a name="AllowedPolicies" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedPolicies"></a>

```csharp
public string[] AllowedPolicies { get; }
```

- *Type:* string[]

---

##### `AllowedPoliciesGlob`<sup>Required</sup> <a name="AllowedPoliciesGlob" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedPoliciesGlob"></a>

```csharp
public string[] AllowedPoliciesGlob { get; }
```

- *Type:* string[]

---

##### `DisallowedPolicies`<sup>Required</sup> <a name="DisallowedPolicies" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.disallowedPolicies"></a>

```csharp
public string[] DisallowedPolicies { get; }
```

- *Type:* string[]

---

##### `DisallowedPoliciesGlob`<sup>Required</sup> <a name="DisallowedPoliciesGlob" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.disallowedPoliciesGlob"></a>

```csharp
public string[] DisallowedPoliciesGlob { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Orphan`<sup>Required</sup> <a name="Orphan" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.orphan"></a>

```csharp
public bool|IResolvable Orphan { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PathSuffix`<sup>Required</sup> <a name="PathSuffix" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.pathSuffix"></a>

```csharp
public string PathSuffix { get; }
```

- *Type:* string

---

##### `Renewable`<sup>Required</sup> <a name="Renewable" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.renewable"></a>

```csharp
public bool|IResolvable Renewable { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.roleName"></a>

```csharp
public string RoleName { get; }
```

- *Type:* string

---

##### `TokenBoundCidrs`<sup>Required</sup> <a name="TokenBoundCidrs" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenBoundCidrs"></a>

```csharp
public string[] TokenBoundCidrs { get; }
```

- *Type:* string[]

---

##### `TokenExplicitMaxTtl`<sup>Required</sup> <a name="TokenExplicitMaxTtl" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenExplicitMaxTtl"></a>

```csharp
public double TokenExplicitMaxTtl { get; }
```

- *Type:* double

---

##### `TokenMaxTtl`<sup>Required</sup> <a name="TokenMaxTtl" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenMaxTtl"></a>

```csharp
public double TokenMaxTtl { get; }
```

- *Type:* double

---

##### `TokenNoDefaultPolicy`<sup>Required</sup> <a name="TokenNoDefaultPolicy" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenNoDefaultPolicy"></a>

```csharp
public bool|IResolvable TokenNoDefaultPolicy { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TokenNumUses`<sup>Required</sup> <a name="TokenNumUses" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenNumUses"></a>

```csharp
public double TokenNumUses { get; }
```

- *Type:* double

---

##### `TokenPeriod`<sup>Required</sup> <a name="TokenPeriod" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenPeriod"></a>

```csharp
public double TokenPeriod { get; }
```

- *Type:* double

---

##### `TokenPolicies`<sup>Required</sup> <a name="TokenPolicies" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenPolicies"></a>

```csharp
public string[] TokenPolicies { get; }
```

- *Type:* string[]

---

##### `TokenTtl`<sup>Required</sup> <a name="TokenTtl" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenTtl"></a>

```csharp
public double TokenTtl { get; }
```

- *Type:* double

---

##### `TokenType`<sup>Required</sup> <a name="TokenType" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenType"></a>

```csharp
public string TokenType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TokenAuthBackendRoleConfig <a name="TokenAuthBackendRoleConfig" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new TokenAuthBackendRoleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string RoleName,
    System.Collections.Generic.IDictionary<string, string> AliasMetadata = null,
    string[] AllowedEntityAliases = null,
    string[] AllowedPolicies = null,
    string[] AllowedPoliciesGlob = null,
    string[] DisallowedPolicies = null,
    string[] DisallowedPoliciesGlob = null,
    string Id = null,
    string Namespace = null,
    bool|IResolvable Orphan = null,
    string PathSuffix = null,
    bool|IResolvable Renewable = null,
    string[] TokenBoundCidrs = null,
    double TokenExplicitMaxTtl = null,
    double TokenMaxTtl = null,
    bool|IResolvable TokenNoDefaultPolicy = null,
    double TokenNumUses = null,
    double TokenPeriod = null,
    string[] TokenPolicies = null,
    double TokenTtl = null,
    string TokenType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.roleName">RoleName</a></code> | <code>string</code> | Name of the role. |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.aliasMetadata">AliasMetadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The metadata to be tied to generated entity alias. |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.allowedEntityAliases">AllowedEntityAliases</a></code> | <code>string[]</code> | Set of allowed entity aliases for this role. |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.allowedPolicies">AllowedPolicies</a></code> | <code>string[]</code> | List of allowed policies for given role. |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.allowedPoliciesGlob">AllowedPoliciesGlob</a></code> | <code>string[]</code> | Set of allowed policies with glob match for given role. |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.disallowedPolicies">DisallowedPolicies</a></code> | <code>string[]</code> | List of disallowed policies for given role. |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.disallowedPoliciesGlob">DisallowedPoliciesGlob</a></code> | <code>string[]</code> | Set of disallowed policies with glob match for given role. |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/token_auth_backend_role#id TokenAuthBackendRole#id}. |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.orphan">Orphan</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, tokens created against this policy will be orphan tokens. |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.pathSuffix">PathSuffix</a></code> | <code>string</code> | Tokens created against this role will have the given suffix as part of their path in addition to the role name. |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.renewable">Renewable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to disable the ability of the token to be renewed past its initial TTL. |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenBoundCidrs">TokenBoundCidrs</a></code> | <code>string[]</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenExplicitMaxTtl">TokenExplicitMaxTtl</a></code> | <code>double</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenMaxTtl">TokenMaxTtl</a></code> | <code>double</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenNoDefaultPolicy">TokenNoDefaultPolicy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenNumUses">TokenNumUses</a></code> | <code>double</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenPeriod">TokenPeriod</a></code> | <code>double</code> | Generated Token's Period. |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenPolicies">TokenPolicies</a></code> | <code>string[]</code> | Generated Token's Policies. |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenTtl">TokenTtl</a></code> | <code>double</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenType">TokenType</a></code> | <code>string</code> | The type of token to generate, service or batch. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.roleName"></a>

```csharp
public string RoleName { get; set; }
```

- *Type:* string

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/token_auth_backend_role#role_name TokenAuthBackendRole#role_name}

---

##### `AliasMetadata`<sup>Optional</sup> <a name="AliasMetadata" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.aliasMetadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AliasMetadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The metadata to be tied to generated entity alias.

This should be a list or map containing the metadata in key value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/token_auth_backend_role#alias_metadata TokenAuthBackendRole#alias_metadata}

---

##### `AllowedEntityAliases`<sup>Optional</sup> <a name="AllowedEntityAliases" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.allowedEntityAliases"></a>

```csharp
public string[] AllowedEntityAliases { get; set; }
```

- *Type:* string[]

Set of allowed entity aliases for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/token_auth_backend_role#allowed_entity_aliases TokenAuthBackendRole#allowed_entity_aliases}

---

##### `AllowedPolicies`<sup>Optional</sup> <a name="AllowedPolicies" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.allowedPolicies"></a>

```csharp
public string[] AllowedPolicies { get; set; }
```

- *Type:* string[]

List of allowed policies for given role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/token_auth_backend_role#allowed_policies TokenAuthBackendRole#allowed_policies}

---

##### `AllowedPoliciesGlob`<sup>Optional</sup> <a name="AllowedPoliciesGlob" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.allowedPoliciesGlob"></a>

```csharp
public string[] AllowedPoliciesGlob { get; set; }
```

- *Type:* string[]

Set of allowed policies with glob match for given role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/token_auth_backend_role#allowed_policies_glob TokenAuthBackendRole#allowed_policies_glob}

---

##### `DisallowedPolicies`<sup>Optional</sup> <a name="DisallowedPolicies" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.disallowedPolicies"></a>

```csharp
public string[] DisallowedPolicies { get; set; }
```

- *Type:* string[]

List of disallowed policies for given role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/token_auth_backend_role#disallowed_policies TokenAuthBackendRole#disallowed_policies}

---

##### `DisallowedPoliciesGlob`<sup>Optional</sup> <a name="DisallowedPoliciesGlob" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.disallowedPoliciesGlob"></a>

```csharp
public string[] DisallowedPoliciesGlob { get; set; }
```

- *Type:* string[]

Set of disallowed policies with glob match for given role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/token_auth_backend_role#disallowed_policies_glob TokenAuthBackendRole#disallowed_policies_glob}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/token_auth_backend_role#id TokenAuthBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/token_auth_backend_role#namespace TokenAuthBackendRole#namespace}

---

##### `Orphan`<sup>Optional</sup> <a name="Orphan" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.orphan"></a>

```csharp
public bool|IResolvable Orphan { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, tokens created against this policy will be orphan tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/token_auth_backend_role#orphan TokenAuthBackendRole#orphan}

---

##### `PathSuffix`<sup>Optional</sup> <a name="PathSuffix" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.pathSuffix"></a>

```csharp
public string PathSuffix { get; set; }
```

- *Type:* string

Tokens created against this role will have the given suffix as part of their path in addition to the role name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/token_auth_backend_role#path_suffix TokenAuthBackendRole#path_suffix}

---

##### `Renewable`<sup>Optional</sup> <a name="Renewable" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.renewable"></a>

```csharp
public bool|IResolvable Renewable { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to disable the ability of the token to be renewed past its initial TTL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/token_auth_backend_role#renewable TokenAuthBackendRole#renewable}

---

##### `TokenBoundCidrs`<sup>Optional</sup> <a name="TokenBoundCidrs" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenBoundCidrs"></a>

```csharp
public string[] TokenBoundCidrs { get; set; }
```

- *Type:* string[]

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/token_auth_backend_role#token_bound_cidrs TokenAuthBackendRole#token_bound_cidrs}

---

##### `TokenExplicitMaxTtl`<sup>Optional</sup> <a name="TokenExplicitMaxTtl" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenExplicitMaxTtl"></a>

```csharp
public double TokenExplicitMaxTtl { get; set; }
```

- *Type:* double

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/token_auth_backend_role#token_explicit_max_ttl TokenAuthBackendRole#token_explicit_max_ttl}

---

##### `TokenMaxTtl`<sup>Optional</sup> <a name="TokenMaxTtl" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenMaxTtl"></a>

```csharp
public double TokenMaxTtl { get; set; }
```

- *Type:* double

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/token_auth_backend_role#token_max_ttl TokenAuthBackendRole#token_max_ttl}

---

##### `TokenNoDefaultPolicy`<sup>Optional</sup> <a name="TokenNoDefaultPolicy" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenNoDefaultPolicy"></a>

```csharp
public bool|IResolvable TokenNoDefaultPolicy { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/token_auth_backend_role#token_no_default_policy TokenAuthBackendRole#token_no_default_policy}

---

##### `TokenNumUses`<sup>Optional</sup> <a name="TokenNumUses" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenNumUses"></a>

```csharp
public double TokenNumUses { get; set; }
```

- *Type:* double

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/token_auth_backend_role#token_num_uses TokenAuthBackendRole#token_num_uses}

---

##### `TokenPeriod`<sup>Optional</sup> <a name="TokenPeriod" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenPeriod"></a>

```csharp
public double TokenPeriod { get; set; }
```

- *Type:* double

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/token_auth_backend_role#token_period TokenAuthBackendRole#token_period}

---

##### `TokenPolicies`<sup>Optional</sup> <a name="TokenPolicies" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenPolicies"></a>

```csharp
public string[] TokenPolicies { get; set; }
```

- *Type:* string[]

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/token_auth_backend_role#token_policies TokenAuthBackendRole#token_policies}

---

##### `TokenTtl`<sup>Optional</sup> <a name="TokenTtl" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenTtl"></a>

```csharp
public double TokenTtl { get; set; }
```

- *Type:* double

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/token_auth_backend_role#token_ttl TokenAuthBackendRole#token_ttl}

---

##### `TokenType`<sup>Optional</sup> <a name="TokenType" id="@cdktn/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenType"></a>

```csharp
public string TokenType { get; set; }
```

- *Type:* string

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/token_auth_backend_role#token_type TokenAuthBackendRole#token_type}

---



