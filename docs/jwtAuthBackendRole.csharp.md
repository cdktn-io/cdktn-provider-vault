# `jwtAuthBackendRole` Submodule <a name="`jwtAuthBackendRole` Submodule" id="@cdktn/provider-vault.jwtAuthBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### JwtAuthBackendRole <a name="JwtAuthBackendRole" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/jwt_auth_backend_role vault_jwt_auth_backend_role}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new JwtAuthBackendRole(Construct Scope, string Id, JwtAuthBackendRoleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig">JwtAuthBackendRoleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig">JwtAuthBackendRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetAliasMetadata">ResetAliasMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetAllowedRedirectUris">ResetAllowedRedirectUris</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetBackend">ResetBackend</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetBoundAudiences">ResetBoundAudiences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetBoundClaims">ResetBoundClaims</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetBoundClaimsType">ResetBoundClaimsType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetBoundSubject">ResetBoundSubject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetClaimMappings">ResetClaimMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetClockSkewLeeway">ResetClockSkewLeeway</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetDisableBoundClaimsParsing">ResetDisableBoundClaimsParsing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetExpirationLeeway">ResetExpirationLeeway</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetGroupsClaim">ResetGroupsClaim</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetMaxAge">ResetMaxAge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetNotBeforeLeeway">ResetNotBeforeLeeway</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetOidcScopes">ResetOidcScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetRoleType">ResetRoleType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenBoundCidrs">ResetTokenBoundCidrs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenExplicitMaxTtl">ResetTokenExplicitMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenMaxTtl">ResetTokenMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenNoDefaultPolicy">ResetTokenNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenNumUses">ResetTokenNumUses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenPeriod">ResetTokenPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenPolicies">ResetTokenPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenTtl">ResetTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenType">ResetTokenType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetUserClaimJsonPointer">ResetUserClaimJsonPointer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetVerboseOidcLogging">ResetVerboseOidcLogging</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAliasMetadata` <a name="ResetAliasMetadata" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetAliasMetadata"></a>

```csharp
private void ResetAliasMetadata()
```

##### `ResetAllowedRedirectUris` <a name="ResetAllowedRedirectUris" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetAllowedRedirectUris"></a>

```csharp
private void ResetAllowedRedirectUris()
```

##### `ResetBackend` <a name="ResetBackend" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetBackend"></a>

```csharp
private void ResetBackend()
```

##### `ResetBoundAudiences` <a name="ResetBoundAudiences" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetBoundAudiences"></a>

```csharp
private void ResetBoundAudiences()
```

##### `ResetBoundClaims` <a name="ResetBoundClaims" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetBoundClaims"></a>

```csharp
private void ResetBoundClaims()
```

##### `ResetBoundClaimsType` <a name="ResetBoundClaimsType" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetBoundClaimsType"></a>

```csharp
private void ResetBoundClaimsType()
```

##### `ResetBoundSubject` <a name="ResetBoundSubject" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetBoundSubject"></a>

```csharp
private void ResetBoundSubject()
```

##### `ResetClaimMappings` <a name="ResetClaimMappings" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetClaimMappings"></a>

```csharp
private void ResetClaimMappings()
```

##### `ResetClockSkewLeeway` <a name="ResetClockSkewLeeway" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetClockSkewLeeway"></a>

```csharp
private void ResetClockSkewLeeway()
```

##### `ResetDisableBoundClaimsParsing` <a name="ResetDisableBoundClaimsParsing" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetDisableBoundClaimsParsing"></a>

```csharp
private void ResetDisableBoundClaimsParsing()
```

##### `ResetExpirationLeeway` <a name="ResetExpirationLeeway" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetExpirationLeeway"></a>

```csharp
private void ResetExpirationLeeway()
```

##### `ResetGroupsClaim` <a name="ResetGroupsClaim" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetGroupsClaim"></a>

```csharp
private void ResetGroupsClaim()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMaxAge` <a name="ResetMaxAge" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetMaxAge"></a>

```csharp
private void ResetMaxAge()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetNotBeforeLeeway` <a name="ResetNotBeforeLeeway" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetNotBeforeLeeway"></a>

```csharp
private void ResetNotBeforeLeeway()
```

##### `ResetOidcScopes` <a name="ResetOidcScopes" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetOidcScopes"></a>

```csharp
private void ResetOidcScopes()
```

##### `ResetRoleType` <a name="ResetRoleType" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetRoleType"></a>

```csharp
private void ResetRoleType()
```

##### `ResetTokenBoundCidrs` <a name="ResetTokenBoundCidrs" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenBoundCidrs"></a>

```csharp
private void ResetTokenBoundCidrs()
```

##### `ResetTokenExplicitMaxTtl` <a name="ResetTokenExplicitMaxTtl" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenExplicitMaxTtl"></a>

```csharp
private void ResetTokenExplicitMaxTtl()
```

##### `ResetTokenMaxTtl` <a name="ResetTokenMaxTtl" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenMaxTtl"></a>

```csharp
private void ResetTokenMaxTtl()
```

##### `ResetTokenNoDefaultPolicy` <a name="ResetTokenNoDefaultPolicy" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenNoDefaultPolicy"></a>

```csharp
private void ResetTokenNoDefaultPolicy()
```

##### `ResetTokenNumUses` <a name="ResetTokenNumUses" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenNumUses"></a>

```csharp
private void ResetTokenNumUses()
```

##### `ResetTokenPeriod` <a name="ResetTokenPeriod" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenPeriod"></a>

```csharp
private void ResetTokenPeriod()
```

##### `ResetTokenPolicies` <a name="ResetTokenPolicies" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenPolicies"></a>

```csharp
private void ResetTokenPolicies()
```

##### `ResetTokenTtl` <a name="ResetTokenTtl" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenTtl"></a>

```csharp
private void ResetTokenTtl()
```

##### `ResetTokenType` <a name="ResetTokenType" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenType"></a>

```csharp
private void ResetTokenType()
```

##### `ResetUserClaimJsonPointer` <a name="ResetUserClaimJsonPointer" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetUserClaimJsonPointer"></a>

```csharp
private void ResetUserClaimJsonPointer()
```

##### `ResetVerboseOidcLogging` <a name="ResetVerboseOidcLogging" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetVerboseOidcLogging"></a>

```csharp
private void ResetVerboseOidcLogging()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a JwtAuthBackendRole resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

JwtAuthBackendRole.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

JwtAuthBackendRole.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

JwtAuthBackendRole.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

JwtAuthBackendRole.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a JwtAuthBackendRole resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the JwtAuthBackendRole to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing JwtAuthBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/jwt_auth_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the JwtAuthBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.aliasMetadataInput">AliasMetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.allowedRedirectUrisInput">AllowedRedirectUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.backendInput">BackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundAudiencesInput">BoundAudiencesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundClaimsInput">BoundClaimsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundClaimsTypeInput">BoundClaimsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundSubjectInput">BoundSubjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.claimMappingsInput">ClaimMappingsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.clockSkewLeewayInput">ClockSkewLeewayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.disableBoundClaimsParsingInput">DisableBoundClaimsParsingInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.expirationLeewayInput">ExpirationLeewayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.groupsClaimInput">GroupsClaimInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.maxAgeInput">MaxAgeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.notBeforeLeewayInput">NotBeforeLeewayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.oidcScopesInput">OidcScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.roleNameInput">RoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.roleTypeInput">RoleTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenBoundCidrsInput">TokenBoundCidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenExplicitMaxTtlInput">TokenExplicitMaxTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenMaxTtlInput">TokenMaxTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenNoDefaultPolicyInput">TokenNoDefaultPolicyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenNumUsesInput">TokenNumUsesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenPeriodInput">TokenPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenPoliciesInput">TokenPoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenTtlInput">TokenTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenTypeInput">TokenTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.userClaimInput">UserClaimInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.userClaimJsonPointerInput">UserClaimJsonPointerInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.verboseOidcLoggingInput">VerboseOidcLoggingInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.aliasMetadata">AliasMetadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.allowedRedirectUris">AllowedRedirectUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.backend">Backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundAudiences">BoundAudiences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundClaims">BoundClaims</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundClaimsType">BoundClaimsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundSubject">BoundSubject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.claimMappings">ClaimMappings</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.clockSkewLeeway">ClockSkewLeeway</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.disableBoundClaimsParsing">DisableBoundClaimsParsing</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.expirationLeeway">ExpirationLeeway</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.groupsClaim">GroupsClaim</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.maxAge">MaxAge</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.notBeforeLeeway">NotBeforeLeeway</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.oidcScopes">OidcScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.roleName">RoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.roleType">RoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenBoundCidrs">TokenBoundCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenExplicitMaxTtl">TokenExplicitMaxTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenMaxTtl">TokenMaxTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenNoDefaultPolicy">TokenNoDefaultPolicy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenNumUses">TokenNumUses</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenPeriod">TokenPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenPolicies">TokenPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenTtl">TokenTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenType">TokenType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.userClaim">UserClaim</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.userClaimJsonPointer">UserClaimJsonPointer</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.verboseOidcLogging">VerboseOidcLogging</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AliasMetadataInput`<sup>Optional</sup> <a name="AliasMetadataInput" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.aliasMetadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AliasMetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AllowedRedirectUrisInput`<sup>Optional</sup> <a name="AllowedRedirectUrisInput" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.allowedRedirectUrisInput"></a>

```csharp
public string[] AllowedRedirectUrisInput { get; }
```

- *Type:* string[]

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.backendInput"></a>

```csharp
public string BackendInput { get; }
```

- *Type:* string

---

##### `BoundAudiencesInput`<sup>Optional</sup> <a name="BoundAudiencesInput" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundAudiencesInput"></a>

```csharp
public string[] BoundAudiencesInput { get; }
```

- *Type:* string[]

---

##### `BoundClaimsInput`<sup>Optional</sup> <a name="BoundClaimsInput" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundClaimsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> BoundClaimsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `BoundClaimsTypeInput`<sup>Optional</sup> <a name="BoundClaimsTypeInput" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundClaimsTypeInput"></a>

```csharp
public string BoundClaimsTypeInput { get; }
```

- *Type:* string

---

##### `BoundSubjectInput`<sup>Optional</sup> <a name="BoundSubjectInput" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundSubjectInput"></a>

```csharp
public string BoundSubjectInput { get; }
```

- *Type:* string

---

##### `ClaimMappingsInput`<sup>Optional</sup> <a name="ClaimMappingsInput" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.claimMappingsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ClaimMappingsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ClockSkewLeewayInput`<sup>Optional</sup> <a name="ClockSkewLeewayInput" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.clockSkewLeewayInput"></a>

```csharp
public double ClockSkewLeewayInput { get; }
```

- *Type:* double

---

##### `DisableBoundClaimsParsingInput`<sup>Optional</sup> <a name="DisableBoundClaimsParsingInput" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.disableBoundClaimsParsingInput"></a>

```csharp
public bool|IResolvable DisableBoundClaimsParsingInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExpirationLeewayInput`<sup>Optional</sup> <a name="ExpirationLeewayInput" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.expirationLeewayInput"></a>

```csharp
public double ExpirationLeewayInput { get; }
```

- *Type:* double

---

##### `GroupsClaimInput`<sup>Optional</sup> <a name="GroupsClaimInput" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.groupsClaimInput"></a>

```csharp
public string GroupsClaimInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MaxAgeInput`<sup>Optional</sup> <a name="MaxAgeInput" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.maxAgeInput"></a>

```csharp
public double MaxAgeInput { get; }
```

- *Type:* double

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `NotBeforeLeewayInput`<sup>Optional</sup> <a name="NotBeforeLeewayInput" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.notBeforeLeewayInput"></a>

```csharp
public double NotBeforeLeewayInput { get; }
```

- *Type:* double

---

##### `OidcScopesInput`<sup>Optional</sup> <a name="OidcScopesInput" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.oidcScopesInput"></a>

```csharp
public string[] OidcScopesInput { get; }
```

- *Type:* string[]

---

##### `RoleNameInput`<sup>Optional</sup> <a name="RoleNameInput" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.roleNameInput"></a>

```csharp
public string RoleNameInput { get; }
```

- *Type:* string

---

##### `RoleTypeInput`<sup>Optional</sup> <a name="RoleTypeInput" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.roleTypeInput"></a>

```csharp
public string RoleTypeInput { get; }
```

- *Type:* string

---

##### `TokenBoundCidrsInput`<sup>Optional</sup> <a name="TokenBoundCidrsInput" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenBoundCidrsInput"></a>

```csharp
public string[] TokenBoundCidrsInput { get; }
```

- *Type:* string[]

---

##### `TokenExplicitMaxTtlInput`<sup>Optional</sup> <a name="TokenExplicitMaxTtlInput" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenExplicitMaxTtlInput"></a>

```csharp
public double TokenExplicitMaxTtlInput { get; }
```

- *Type:* double

---

##### `TokenMaxTtlInput`<sup>Optional</sup> <a name="TokenMaxTtlInput" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenMaxTtlInput"></a>

```csharp
public double TokenMaxTtlInput { get; }
```

- *Type:* double

---

##### `TokenNoDefaultPolicyInput`<sup>Optional</sup> <a name="TokenNoDefaultPolicyInput" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenNoDefaultPolicyInput"></a>

```csharp
public bool|IResolvable TokenNoDefaultPolicyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TokenNumUsesInput`<sup>Optional</sup> <a name="TokenNumUsesInput" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenNumUsesInput"></a>

```csharp
public double TokenNumUsesInput { get; }
```

- *Type:* double

---

##### `TokenPeriodInput`<sup>Optional</sup> <a name="TokenPeriodInput" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenPeriodInput"></a>

```csharp
public double TokenPeriodInput { get; }
```

- *Type:* double

---

##### `TokenPoliciesInput`<sup>Optional</sup> <a name="TokenPoliciesInput" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenPoliciesInput"></a>

```csharp
public string[] TokenPoliciesInput { get; }
```

- *Type:* string[]

---

##### `TokenTtlInput`<sup>Optional</sup> <a name="TokenTtlInput" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenTtlInput"></a>

```csharp
public double TokenTtlInput { get; }
```

- *Type:* double

---

##### `TokenTypeInput`<sup>Optional</sup> <a name="TokenTypeInput" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenTypeInput"></a>

```csharp
public string TokenTypeInput { get; }
```

- *Type:* string

---

##### `UserClaimInput`<sup>Optional</sup> <a name="UserClaimInput" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.userClaimInput"></a>

```csharp
public string UserClaimInput { get; }
```

- *Type:* string

---

##### `UserClaimJsonPointerInput`<sup>Optional</sup> <a name="UserClaimJsonPointerInput" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.userClaimJsonPointerInput"></a>

```csharp
public bool|IResolvable UserClaimJsonPointerInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `VerboseOidcLoggingInput`<sup>Optional</sup> <a name="VerboseOidcLoggingInput" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.verboseOidcLoggingInput"></a>

```csharp
public bool|IResolvable VerboseOidcLoggingInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AliasMetadata`<sup>Required</sup> <a name="AliasMetadata" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.aliasMetadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AliasMetadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AllowedRedirectUris`<sup>Required</sup> <a name="AllowedRedirectUris" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.allowedRedirectUris"></a>

```csharp
public string[] AllowedRedirectUris { get; }
```

- *Type:* string[]

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.backend"></a>

```csharp
public string Backend { get; }
```

- *Type:* string

---

##### `BoundAudiences`<sup>Required</sup> <a name="BoundAudiences" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundAudiences"></a>

```csharp
public string[] BoundAudiences { get; }
```

- *Type:* string[]

---

##### `BoundClaims`<sup>Required</sup> <a name="BoundClaims" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundClaims"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> BoundClaims { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `BoundClaimsType`<sup>Required</sup> <a name="BoundClaimsType" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundClaimsType"></a>

```csharp
public string BoundClaimsType { get; }
```

- *Type:* string

---

##### `BoundSubject`<sup>Required</sup> <a name="BoundSubject" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundSubject"></a>

```csharp
public string BoundSubject { get; }
```

- *Type:* string

---

##### `ClaimMappings`<sup>Required</sup> <a name="ClaimMappings" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.claimMappings"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ClaimMappings { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ClockSkewLeeway`<sup>Required</sup> <a name="ClockSkewLeeway" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.clockSkewLeeway"></a>

```csharp
public double ClockSkewLeeway { get; }
```

- *Type:* double

---

##### `DisableBoundClaimsParsing`<sup>Required</sup> <a name="DisableBoundClaimsParsing" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.disableBoundClaimsParsing"></a>

```csharp
public bool|IResolvable DisableBoundClaimsParsing { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExpirationLeeway`<sup>Required</sup> <a name="ExpirationLeeway" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.expirationLeeway"></a>

```csharp
public double ExpirationLeeway { get; }
```

- *Type:* double

---

##### `GroupsClaim`<sup>Required</sup> <a name="GroupsClaim" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.groupsClaim"></a>

```csharp
public string GroupsClaim { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaxAge`<sup>Required</sup> <a name="MaxAge" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.maxAge"></a>

```csharp
public double MaxAge { get; }
```

- *Type:* double

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `NotBeforeLeeway`<sup>Required</sup> <a name="NotBeforeLeeway" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.notBeforeLeeway"></a>

```csharp
public double NotBeforeLeeway { get; }
```

- *Type:* double

---

##### `OidcScopes`<sup>Required</sup> <a name="OidcScopes" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.oidcScopes"></a>

```csharp
public string[] OidcScopes { get; }
```

- *Type:* string[]

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.roleName"></a>

```csharp
public string RoleName { get; }
```

- *Type:* string

---

##### `RoleType`<sup>Required</sup> <a name="RoleType" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.roleType"></a>

```csharp
public string RoleType { get; }
```

- *Type:* string

---

##### `TokenBoundCidrs`<sup>Required</sup> <a name="TokenBoundCidrs" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenBoundCidrs"></a>

```csharp
public string[] TokenBoundCidrs { get; }
```

- *Type:* string[]

---

##### `TokenExplicitMaxTtl`<sup>Required</sup> <a name="TokenExplicitMaxTtl" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenExplicitMaxTtl"></a>

```csharp
public double TokenExplicitMaxTtl { get; }
```

- *Type:* double

---

##### `TokenMaxTtl`<sup>Required</sup> <a name="TokenMaxTtl" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenMaxTtl"></a>

```csharp
public double TokenMaxTtl { get; }
```

- *Type:* double

---

##### `TokenNoDefaultPolicy`<sup>Required</sup> <a name="TokenNoDefaultPolicy" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenNoDefaultPolicy"></a>

```csharp
public bool|IResolvable TokenNoDefaultPolicy { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TokenNumUses`<sup>Required</sup> <a name="TokenNumUses" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenNumUses"></a>

```csharp
public double TokenNumUses { get; }
```

- *Type:* double

---

##### `TokenPeriod`<sup>Required</sup> <a name="TokenPeriod" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenPeriod"></a>

```csharp
public double TokenPeriod { get; }
```

- *Type:* double

---

##### `TokenPolicies`<sup>Required</sup> <a name="TokenPolicies" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenPolicies"></a>

```csharp
public string[] TokenPolicies { get; }
```

- *Type:* string[]

---

##### `TokenTtl`<sup>Required</sup> <a name="TokenTtl" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenTtl"></a>

```csharp
public double TokenTtl { get; }
```

- *Type:* double

---

##### `TokenType`<sup>Required</sup> <a name="TokenType" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenType"></a>

```csharp
public string TokenType { get; }
```

- *Type:* string

---

##### `UserClaim`<sup>Required</sup> <a name="UserClaim" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.userClaim"></a>

```csharp
public string UserClaim { get; }
```

- *Type:* string

---

##### `UserClaimJsonPointer`<sup>Required</sup> <a name="UserClaimJsonPointer" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.userClaimJsonPointer"></a>

```csharp
public bool|IResolvable UserClaimJsonPointer { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `VerboseOidcLogging`<sup>Required</sup> <a name="VerboseOidcLogging" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.verboseOidcLogging"></a>

```csharp
public bool|IResolvable VerboseOidcLogging { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### JwtAuthBackendRoleConfig <a name="JwtAuthBackendRoleConfig" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new JwtAuthBackendRoleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string RoleName,
    string UserClaim,
    System.Collections.Generic.IDictionary<string, string> AliasMetadata = null,
    string[] AllowedRedirectUris = null,
    string Backend = null,
    string[] BoundAudiences = null,
    System.Collections.Generic.IDictionary<string, string> BoundClaims = null,
    string BoundClaimsType = null,
    string BoundSubject = null,
    System.Collections.Generic.IDictionary<string, string> ClaimMappings = null,
    double ClockSkewLeeway = null,
    bool|IResolvable DisableBoundClaimsParsing = null,
    double ExpirationLeeway = null,
    string GroupsClaim = null,
    string Id = null,
    double MaxAge = null,
    string Namespace = null,
    double NotBeforeLeeway = null,
    string[] OidcScopes = null,
    string RoleType = null,
    string[] TokenBoundCidrs = null,
    double TokenExplicitMaxTtl = null,
    double TokenMaxTtl = null,
    bool|IResolvable TokenNoDefaultPolicy = null,
    double TokenNumUses = null,
    double TokenPeriod = null,
    string[] TokenPolicies = null,
    double TokenTtl = null,
    string TokenType = null,
    bool|IResolvable UserClaimJsonPointer = null,
    bool|IResolvable VerboseOidcLogging = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.roleName">RoleName</a></code> | <code>string</code> | Name of the role. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.userClaim">UserClaim</a></code> | <code>string</code> | The claim to use to uniquely identify the user; |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.aliasMetadata">AliasMetadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The metadata to be tied to generated entity alias. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.allowedRedirectUris">AllowedRedirectUris</a></code> | <code>string[]</code> | The list of allowed values for redirect_uri during OIDC logins. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.backend">Backend</a></code> | <code>string</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.boundAudiences">BoundAudiences</a></code> | <code>string[]</code> | List of aud claims to match against. Any match is sufficient. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.boundClaims">BoundClaims</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Map of claims/values to match against. The expected value may be a single string or a comma-separated string list. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.boundClaimsType">BoundClaimsType</a></code> | <code>string</code> | How to interpret values in the claims/values map: can be either "string" (exact match) or "glob" (wildcard match). |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.boundSubject">BoundSubject</a></code> | <code>string</code> | If set, requires that the sub claim matches this value. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.claimMappings">ClaimMappings</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Map of claims (keys) to be copied to specified metadata fields (values). |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.clockSkewLeeway">ClockSkewLeeway</a></code> | <code>double</code> | The amount of leeway to add to all claims to account for clock skew, in seconds. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.disableBoundClaimsParsing">DisableBoundClaimsParsing</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Disable bound claim value parsing. Useful when values contain commas. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.expirationLeeway">ExpirationLeeway</a></code> | <code>double</code> | The amount of leeway to add to expiration (exp) claims to account for clock skew, in seconds. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.groupsClaim">GroupsClaim</a></code> | <code>string</code> | The claim to use to uniquely identify the set of groups to which the user belongs; |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/jwt_auth_backend_role#id JwtAuthBackendRole#id}. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.maxAge">MaxAge</a></code> | <code>double</code> | Specifies the allowable elapsed time in seconds since the last time the user was actively authenticated. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.notBeforeLeeway">NotBeforeLeeway</a></code> | <code>double</code> | The amount of leeway to add to not before (nbf) claims to account for clock skew, in seconds. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.oidcScopes">OidcScopes</a></code> | <code>string[]</code> | List of OIDC scopes to be used with an OIDC role. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.roleType">RoleType</a></code> | <code>string</code> | Type of role, either "oidc" (default) or "jwt". |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenBoundCidrs">TokenBoundCidrs</a></code> | <code>string[]</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenExplicitMaxTtl">TokenExplicitMaxTtl</a></code> | <code>double</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenMaxTtl">TokenMaxTtl</a></code> | <code>double</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenNoDefaultPolicy">TokenNoDefaultPolicy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenNumUses">TokenNumUses</a></code> | <code>double</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenPeriod">TokenPeriod</a></code> | <code>double</code> | Generated Token's Period. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenPolicies">TokenPolicies</a></code> | <code>string[]</code> | Generated Token's Policies. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenTtl">TokenTtl</a></code> | <code>double</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenType">TokenType</a></code> | <code>string</code> | The type of token to generate, service or batch. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.userClaimJsonPointer">UserClaimJsonPointer</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies if the user_claim value uses JSON pointer syntax for referencing claims. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.verboseOidcLogging">VerboseOidcLogging</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Log received OIDC tokens and claims when debug-level logging is active. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.roleName"></a>

```csharp
public string RoleName { get; set; }
```

- *Type:* string

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/jwt_auth_backend_role#role_name JwtAuthBackendRole#role_name}

---

##### `UserClaim`<sup>Required</sup> <a name="UserClaim" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.userClaim"></a>

```csharp
public string UserClaim { get; set; }
```

- *Type:* string

The claim to use to uniquely identify the user;

this will be used as the name for the Identity entity alias created due to a successful login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/jwt_auth_backend_role#user_claim JwtAuthBackendRole#user_claim}

---

##### `AliasMetadata`<sup>Optional</sup> <a name="AliasMetadata" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.aliasMetadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AliasMetadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The metadata to be tied to generated entity alias.

This should be a list or map containing the metadata in key value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/jwt_auth_backend_role#alias_metadata JwtAuthBackendRole#alias_metadata}

---

##### `AllowedRedirectUris`<sup>Optional</sup> <a name="AllowedRedirectUris" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.allowedRedirectUris"></a>

```csharp
public string[] AllowedRedirectUris { get; set; }
```

- *Type:* string[]

The list of allowed values for redirect_uri during OIDC logins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/jwt_auth_backend_role#allowed_redirect_uris JwtAuthBackendRole#allowed_redirect_uris}

---

##### `Backend`<sup>Optional</sup> <a name="Backend" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.backend"></a>

```csharp
public string Backend { get; set; }
```

- *Type:* string

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/jwt_auth_backend_role#backend JwtAuthBackendRole#backend}

---

##### `BoundAudiences`<sup>Optional</sup> <a name="BoundAudiences" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.boundAudiences"></a>

```csharp
public string[] BoundAudiences { get; set; }
```

- *Type:* string[]

List of aud claims to match against. Any match is sufficient.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/jwt_auth_backend_role#bound_audiences JwtAuthBackendRole#bound_audiences}

---

##### `BoundClaims`<sup>Optional</sup> <a name="BoundClaims" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.boundClaims"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> BoundClaims { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Map of claims/values to match against. The expected value may be a single string or a comma-separated string list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/jwt_auth_backend_role#bound_claims JwtAuthBackendRole#bound_claims}

---

##### `BoundClaimsType`<sup>Optional</sup> <a name="BoundClaimsType" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.boundClaimsType"></a>

```csharp
public string BoundClaimsType { get; set; }
```

- *Type:* string

How to interpret values in the claims/values map: can be either "string" (exact match) or "glob" (wildcard match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/jwt_auth_backend_role#bound_claims_type JwtAuthBackendRole#bound_claims_type}

---

##### `BoundSubject`<sup>Optional</sup> <a name="BoundSubject" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.boundSubject"></a>

```csharp
public string BoundSubject { get; set; }
```

- *Type:* string

If set, requires that the sub claim matches this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/jwt_auth_backend_role#bound_subject JwtAuthBackendRole#bound_subject}

---

##### `ClaimMappings`<sup>Optional</sup> <a name="ClaimMappings" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.claimMappings"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ClaimMappings { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Map of claims (keys) to be copied to specified metadata fields (values).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/jwt_auth_backend_role#claim_mappings JwtAuthBackendRole#claim_mappings}

---

##### `ClockSkewLeeway`<sup>Optional</sup> <a name="ClockSkewLeeway" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.clockSkewLeeway"></a>

```csharp
public double ClockSkewLeeway { get; set; }
```

- *Type:* double

The amount of leeway to add to all claims to account for clock skew, in seconds.

Defaults to 60 seconds if set to 0 and can be disabled if set to -1. Only applicable with 'jwt' roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/jwt_auth_backend_role#clock_skew_leeway JwtAuthBackendRole#clock_skew_leeway}

---

##### `DisableBoundClaimsParsing`<sup>Optional</sup> <a name="DisableBoundClaimsParsing" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.disableBoundClaimsParsing"></a>

```csharp
public bool|IResolvable DisableBoundClaimsParsing { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Disable bound claim value parsing. Useful when values contain commas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/jwt_auth_backend_role#disable_bound_claims_parsing JwtAuthBackendRole#disable_bound_claims_parsing}

---

##### `ExpirationLeeway`<sup>Optional</sup> <a name="ExpirationLeeway" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.expirationLeeway"></a>

```csharp
public double ExpirationLeeway { get; set; }
```

- *Type:* double

The amount of leeway to add to expiration (exp) claims to account for clock skew, in seconds.

Defaults to 150 seconds if set to 0 and can be disabled if set to -1. Only applicable with 'jwt' roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/jwt_auth_backend_role#expiration_leeway JwtAuthBackendRole#expiration_leeway}

---

##### `GroupsClaim`<sup>Optional</sup> <a name="GroupsClaim" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.groupsClaim"></a>

```csharp
public string GroupsClaim { get; set; }
```

- *Type:* string

The claim to use to uniquely identify the set of groups to which the user belongs;

this will be used as the names for the Identity group aliases created due to a successful login. The claim value must be a list of strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/jwt_auth_backend_role#groups_claim JwtAuthBackendRole#groups_claim}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/jwt_auth_backend_role#id JwtAuthBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxAge`<sup>Optional</sup> <a name="MaxAge" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.maxAge"></a>

```csharp
public double MaxAge { get; set; }
```

- *Type:* double

Specifies the allowable elapsed time in seconds since the last time the user was actively authenticated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/jwt_auth_backend_role#max_age JwtAuthBackendRole#max_age}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/jwt_auth_backend_role#namespace JwtAuthBackendRole#namespace}

---

##### `NotBeforeLeeway`<sup>Optional</sup> <a name="NotBeforeLeeway" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.notBeforeLeeway"></a>

```csharp
public double NotBeforeLeeway { get; set; }
```

- *Type:* double

The amount of leeway to add to not before (nbf) claims to account for clock skew, in seconds.

Defaults to 150 seconds if set to 0 and can be disabled if set to -1. Only applicable with 'jwt' roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/jwt_auth_backend_role#not_before_leeway JwtAuthBackendRole#not_before_leeway}

---

##### `OidcScopes`<sup>Optional</sup> <a name="OidcScopes" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.oidcScopes"></a>

```csharp
public string[] OidcScopes { get; set; }
```

- *Type:* string[]

List of OIDC scopes to be used with an OIDC role.

The standard scope "openid" is automatically included and need not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/jwt_auth_backend_role#oidc_scopes JwtAuthBackendRole#oidc_scopes}

---

##### `RoleType`<sup>Optional</sup> <a name="RoleType" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.roleType"></a>

```csharp
public string RoleType { get; set; }
```

- *Type:* string

Type of role, either "oidc" (default) or "jwt".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/jwt_auth_backend_role#role_type JwtAuthBackendRole#role_type}

---

##### `TokenBoundCidrs`<sup>Optional</sup> <a name="TokenBoundCidrs" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenBoundCidrs"></a>

```csharp
public string[] TokenBoundCidrs { get; set; }
```

- *Type:* string[]

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/jwt_auth_backend_role#token_bound_cidrs JwtAuthBackendRole#token_bound_cidrs}

---

##### `TokenExplicitMaxTtl`<sup>Optional</sup> <a name="TokenExplicitMaxTtl" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenExplicitMaxTtl"></a>

```csharp
public double TokenExplicitMaxTtl { get; set; }
```

- *Type:* double

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/jwt_auth_backend_role#token_explicit_max_ttl JwtAuthBackendRole#token_explicit_max_ttl}

---

##### `TokenMaxTtl`<sup>Optional</sup> <a name="TokenMaxTtl" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenMaxTtl"></a>

```csharp
public double TokenMaxTtl { get; set; }
```

- *Type:* double

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/jwt_auth_backend_role#token_max_ttl JwtAuthBackendRole#token_max_ttl}

---

##### `TokenNoDefaultPolicy`<sup>Optional</sup> <a name="TokenNoDefaultPolicy" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenNoDefaultPolicy"></a>

```csharp
public bool|IResolvable TokenNoDefaultPolicy { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/jwt_auth_backend_role#token_no_default_policy JwtAuthBackendRole#token_no_default_policy}

---

##### `TokenNumUses`<sup>Optional</sup> <a name="TokenNumUses" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenNumUses"></a>

```csharp
public double TokenNumUses { get; set; }
```

- *Type:* double

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/jwt_auth_backend_role#token_num_uses JwtAuthBackendRole#token_num_uses}

---

##### `TokenPeriod`<sup>Optional</sup> <a name="TokenPeriod" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenPeriod"></a>

```csharp
public double TokenPeriod { get; set; }
```

- *Type:* double

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/jwt_auth_backend_role#token_period JwtAuthBackendRole#token_period}

---

##### `TokenPolicies`<sup>Optional</sup> <a name="TokenPolicies" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenPolicies"></a>

```csharp
public string[] TokenPolicies { get; set; }
```

- *Type:* string[]

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/jwt_auth_backend_role#token_policies JwtAuthBackendRole#token_policies}

---

##### `TokenTtl`<sup>Optional</sup> <a name="TokenTtl" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenTtl"></a>

```csharp
public double TokenTtl { get; set; }
```

- *Type:* double

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/jwt_auth_backend_role#token_ttl JwtAuthBackendRole#token_ttl}

---

##### `TokenType`<sup>Optional</sup> <a name="TokenType" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenType"></a>

```csharp
public string TokenType { get; set; }
```

- *Type:* string

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/jwt_auth_backend_role#token_type JwtAuthBackendRole#token_type}

---

##### `UserClaimJsonPointer`<sup>Optional</sup> <a name="UserClaimJsonPointer" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.userClaimJsonPointer"></a>

```csharp
public bool|IResolvable UserClaimJsonPointer { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies if the user_claim value uses JSON pointer syntax for referencing claims.

By default, the user_claim value will not use JSON pointer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/jwt_auth_backend_role#user_claim_json_pointer JwtAuthBackendRole#user_claim_json_pointer}

---

##### `VerboseOidcLogging`<sup>Optional</sup> <a name="VerboseOidcLogging" id="@cdktn/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.verboseOidcLogging"></a>

```csharp
public bool|IResolvable VerboseOidcLogging { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Log received OIDC tokens and claims when debug-level logging is active.

Not recommended in production since sensitive information may be present in OIDC responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/jwt_auth_backend_role#verbose_oidc_logging JwtAuthBackendRole#verbose_oidc_logging}

---



